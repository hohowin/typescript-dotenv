import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/../../.env.test`;
    break;
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;

// DB_CONFIG
export const DB_CONFIG_HOST = process.env.DB_CONFIG_HOST;
export const DB_CONFIG_PORT = process.env.DB_CONFIG_PORT;
export const DB_CONFIG_USERNAME = process.env.DB_CONFIG_USERNAME
export const DB_CONFIG_PASSWORD = process.env.DB_CONFIG_PASSWORD;
export const DB_CONFIG_DATABASE = process.env.DB_CONFIG_DATABASE;
