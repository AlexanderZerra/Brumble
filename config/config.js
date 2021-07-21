require('dotenv').config()
module.exports = {
  development: {
    database: 'Brumble_development',

    dialect: 'postgres'
  },
  test: {
    database: 'Brumble_test',

    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'Brumble_production',

    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
