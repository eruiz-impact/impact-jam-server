// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

const parse = require('pg-connection-string').parse;
const config = parse("postgres://irznjkvuhjctow:f4da86b3f23b57e6f481e904e022a3052e011d58bc7188eebde1b4bb1c0e77cc@ec2-54-205-39-190.compute-1.amazonaws.com:5432/d3ods2u6m09nk9");

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: { rejectUnauthorized: false },
      },
      options: {
        ssl: false,
      },
    },
  },
});