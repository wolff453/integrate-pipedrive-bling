import dotenv from 'dotenv'

dotenv.config()

export default {
    pipedrive: {
        apiToken: process.env.PIPEDRIVE_API_TOKEN,
        baseUrl: process.env.PIPEDRIVE_BASE_API_URL
    },
    bling: {
        apiToken: process.env.BLING_API_TOKEN,
        baseUrl: process.env.BLING_BASE_API_URL
    },
    mongo: {
        db: process.env.MONGO_DATABASE_NAME,
        collection: process.env.MONGO_COLLECTION_NAME,
        connectionString: process.env.MONGO_CONNECTION_STRING
    }
}