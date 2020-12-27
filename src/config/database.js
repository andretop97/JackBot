require('dotenv').config();

const dbConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = dbConfig;
