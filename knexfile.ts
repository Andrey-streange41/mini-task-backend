import type { Knex } from "knex";
import * as dotenv from "dotenv";
dotenv.config();

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const config: IKnexConfig = {
  development: {
    client: "mysql",
    connection: {
      host: 'localhost',
      user: 'root',
      password: '0976196890',
      database: 'CommentsService',
      port: 3306,
      charset: "utf8",
    },
    useNullAsDefault: true,
    debug: true,
    migrations: {
      tableName:'migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};

export default config;
