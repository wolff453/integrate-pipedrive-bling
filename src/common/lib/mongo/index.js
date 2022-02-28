import { Mongo } from '../mongo/mongo.js'
import config from '../../../config/index.js'

export default await Mongo({ config }).connect()