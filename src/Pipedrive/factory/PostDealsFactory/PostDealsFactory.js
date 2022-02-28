import { PipedriveRepository } from "../../repository/pipedriveRepository.js"
import { PipedriveService } from '../../services/PipedriveService.js'
import { PostController } from "../../controllers/PostController/PostController.js"
import request from "../../../providers/requestProvider/index.js"
import config from '../../../config/index.js'
import { BlingSchema } from '../../../schema/BlingSchema.js'
import xml from '../../../providers/XmlProvider/index.js'
import {MongoClient} from 'mongodb'
const client = new MongoClient(config.mongo.connectionString)
const connect = await client.connect()

export const PostDealsPipedriveFactory = () => {
    const pipedriveRepository = PipedriveRepository({ mongo: connect })
    const pipedriveService = PipedriveService({ request, config, xml, BlingSchema, pipedriveRepository })
    const pipedriveController = PostController({ pipedriveService })
    return pipedriveController.handle
}