export const PipedriveRepository = ({ mongo }) => ({
  findAll: async (db, collection) => {
    return mongo.db(db).collection(collection).find({}).toArray()
  },
  insert: async (db, collection, data) => {
    return mongo.db(db).collection(collection).insertMany(data)
  },
})