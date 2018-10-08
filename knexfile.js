// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/READS_DATA'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
