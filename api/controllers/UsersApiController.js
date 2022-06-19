/**
 * UsersApiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const UsersApi = require("../models/UsersApi");
const regForName = /^[a-zA-Z]+$/;
const regForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

module.exports = {
    // Create user
    createUser: async function (req, res) {
        try {
            var params = req.allParams()
            var errorMessage = ''

            // Input validation start 
            if (!params.email || !params.firstName || !params.lastName) {
                return res.status(400).send('Parameter missing. Kindly check typo mistake.')
            }
            var userEmail = params.email.trim()
            var firstName = params.firstName.trim()
            var lastName = params.lastName.trim()
            if (typeof userEmail === undefined || userEmail === null || !regForEmail.test(userEmail)) {
                errorMessage = errorMessage + 'Email is required.<br>'
            }
            if (typeof firstName === undefined || firstName === null || !regForName.test(firstName)) {
                errorMessage = errorMessage + 'First name only accept charecters.<br>'
            }
            if (typeof lastName === undefined || lastName === null || !regForName.test(lastName)) {
                errorMessage = errorMessage + 'Last name only accept charecters.'
            }
            // Input validation end 

            if (errorMessage !== '') {
                return res.status(400).send(errorMessage)
            } else {

                // User create start
                var data = {
                    userEmail: userEmail,
                    firstName: firstName,
                    lastName: lastName
                }
                var result = await UsersApi.create(data).fetch()

                // User create end
                if (result) {
                    return res.json(result)
                }
            }
        } catch (error) {
            return res.status(400).send(error)
        }


    },
    // udpate user
    updateUser: async function (req, res) {
        try {
            var params = req.allParams()
            var userId = params.id
            var errorMessage = ''
            console.log(params);
            // Input validation start 
            if (!params.email && !params.firstName && !params.lastName) {
                return res.status(400).send('Parameter missing. Kindly check typo mistake.')
            }
            var data = {}
            if (params.email) {
                var userEmail = params.email.trim()
                if (typeof userEmail === undefined || userEmail === null || !regForEmail.test(userEmail)) {
                    errorMessage = errorMessage + 'Email is required.<br>'
                } else {
                    data.userEmail = userEmail
                }
            }
            if (params.firstName) {
                var firstName = params.firstName.trim()

                if (typeof firstName === undefined || firstName === null || !regForName.test(firstName)) {
                    errorMessage = errorMessage + 'First name only accept charecters.<br>'
                } else {
                    data.firstName = firstName

                }
            }
            if (params.lastName) {
                var lastName = params.lastName.trim()
                if (typeof lastName === undefined || lastName === null || !regForName.test(lastName)) {
                    errorMessage = errorMessage + 'Last name only accept charecters.'
                } else {
                    data.lastName = lastName
                }
            }
            if (errorMessage !== '') {
                return res.status(400).send(errorMessage)
            }
            // Input validation end

            if (userId) {
                var getUser = await UsersApi.findOne({ id: userId })
                if (getUser) {
                    var result = await UsersApi.updateOne({ id: userId }).set(data)
                    if (result) {
                        return res.json(result)
                    } else {
                        return res.status(400).send(`User with id ${userId} is not updated.`)
                    }
                } else {
                    return res.status(400).send('User not found')
                }
            } else {
                return res.status(400).send('User id require')
            }
        } catch (error) {
            return res.json(error)
        }
    },
    // delete user
    deleteUser: async function (req, res) {
        try {
            var params = req.allParams()
            var userId = params.id
            if (userId) {
                var result = await UsersApi.destroyOne({ id: userId })
                if (result) {
                    return res.status(200).send(`User with id ${userId} is deleted successfully.`)
                } else {
                    return res.status(400).send('User not found')
                }
            } else {
                return res.status(400).send('User id require')
            }
        } catch (error) {
            return res.json(error)
        }

    },
    // get user or users
    allUser: async function (req, res) {
        try {
            var params = req.allParams()
            var userId = params.id
            if (userId) {
                var result = await UsersApi.findOne({ id: userId })
                if (result) {
                    return res.json(result)
                } else {
                    return res.status(400).send('User not found')
                }
            } else {
                result = await UsersApi.find()
                return res.json(result)
            }
        } catch (error) {
            return res.json(error)
        }
    }
};

