import { config } from "dotenv";
config();


const env={
    accountName: 'imageshare',
    databaseName: 'imgShareDB',
    key: 'xq41g1DROtl3hV5noTJ8mJ9R4FpMGwQBaxV6KElv5qwssh21q818NUwKj2hgMFNW4QrOLMQdw076UXDsIkc7oQ==',
   HOST: "imageshare.mongo.cosmos.azure.com",
    port: 10255
}

URL = `mongodb://${env.accountName}:${env.key}@${env.HOST}:${env.port}/${env.databaseName}?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@imageshare@`
export const MONGODB_URI = process.env.MONGODB_URI || URL ;
export const PORT = process.env.PORT || 3000;
