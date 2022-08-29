import config from "../../knexfile";
import knex from "knex";

const env = process.env.NODE_ENV || "development";

export default knex(config[env]);
