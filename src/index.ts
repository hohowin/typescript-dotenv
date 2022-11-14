import { APP_ID, DB_CONFIG_DATABASE, DB_CONFIG_HOST, DB_CONFIG_PASSWORD, DB_CONFIG_PORT, DB_CONFIG_USERNAME } from "./utils/config";

const main = async () => {

    const envPort = parseInt(DB_CONFIG_PORT || '');
    const port = Number.isInteger(envPort) ? envPort : 5432;

    console.log(`APP_ID: ${APP_ID}`);
    console.log(`DB_CONFIG_HOST: ${DB_CONFIG_HOST}`);
    console.log(`DB_CONFIG_PORT: ${port}`);
    console.log(`DB_CONFIG_USERNAME: ${DB_CONFIG_USERNAME}`);
    console.log(`DB_CONFIG_PASSWORD: ${DB_CONFIG_PASSWORD}`);
    console.log(`DB_CONFIG_DATABASE: ${DB_CONFIG_DATABASE}`);
}

main().catch( err => {
    console.error(err);
});