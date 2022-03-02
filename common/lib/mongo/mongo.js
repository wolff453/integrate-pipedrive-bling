import { MongoClient } from "mongodb"

export const Mongo = ({ config }) => ({
  connect: async () => {
    return new MongoClient(config.mongo.connectionString).connect()
  },
});