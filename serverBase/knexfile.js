'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/phone'
    // seeds: {
    //   directory: './seeds/dev'
    // }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/phone'
    // seeds: {
    //   directory: './seeds/test'
    // }
  },

  production: {}
};
