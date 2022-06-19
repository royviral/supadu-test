/**
 * UsersApi.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'supadu1922_users',
  attributes: {
    id: {
      type: 'number',
      columnName: 'userId',
      autoIncrement: true
    },
    firstName: {
      type: 'string',
      required: true,
      description: 'User First Name',
      maxLength: 120,
      example: 'John'
    },
    lastName: {
      type: 'string',
      required: true,
      description: 'User last Name',
      maxLength: 120,
      example: 'Miller'
    },
    userEmail: {
      type: 'string',
      required: true,
      unique: true,
      description: 'user email',
      example: 'abc@gmail.com'
    },
  },
};

