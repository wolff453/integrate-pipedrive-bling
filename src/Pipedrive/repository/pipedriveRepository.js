export const PipedriveRepository = ({ mongo }) => ({
    findAll: (db, collection) => {
        return mongo.db(db).collection(collection).find({}).toArray()
    },
    insert: (db, collection, data) => {
        return mongo.db(db).collection(collection).insertMany(data)
    }
})