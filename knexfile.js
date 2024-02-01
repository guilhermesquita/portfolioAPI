module.exports = {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'portfolio',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
  };