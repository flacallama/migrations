// Update with your config settings.

module.exports = {

  development: {    // local dev environment
    client: 'pg',   //change to pg
    connection: {
      // filename: './dev.sqlite3'   we don't need this
      database: 'migrations'
      host: '127.0.0.1'
    }
  },

  staging: {   // we're only working in the dev environment so forget everything below for now
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
