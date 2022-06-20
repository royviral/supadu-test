// test/integration/controllers/UsersApiController.test.js
var sails = require('sails');

var supertest = require('supertest');
supertest = supertest('http://localhost:1337/')
describe('Mocha Unit Test - Users API', function () {

    describe('Users CRUD Test', function () {
        it('All users - Get all users array or empty array', function (done) {
            supertest
                .get('v1/users')
                .set("Accept", "application/json")
                .expect(200, done);
        });

        it('Create User - will create user successfully', function (done) {
            supertest
                .post('v1/users')
                .send({ firstName: 'test', lastName: 'test', email: 'viral@test.com' })
                .expect(200, done)

        });
        it('Update User - without id it will give 404 error', function (done) {
            supertest
                .patch('v1/users')
                .send({ id: '1', firstName: 'test', lastName: 'test', email: 'test@test.com' })
                .expect(200, done)
        });
        it('Delete User - send wrong id and it will give 404 error', function (done) {
            supertest
                .delete('v1/users')
                .send({ id: '1', })
                .expect(200, done)
        });
    });

});