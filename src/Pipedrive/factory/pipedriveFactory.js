import { PipedriveRepository } from "../repository/pipedriveRepository.js"
import { PipedriveService } from '../services/PipedriveService.js'
import { PipedriveController } from "../controller/pipedriveController.js"
import request from "../../providers/requestProvider/index.js"
import config from '../../config/index.js'
import {json} from '../../schema/BlingSchema.js'
import xml from '../../providers/XmlProvider/index.js'
import mongo from '../../common/lib/mongo/index.js'

export const PipedriveFactory = () => {
    const pipedriveRepository = PipedriveRepository({ mongo })
    const pipedriveService = PipedriveService({ request, config, xml, blingSchema: json, pipedriveRepository })
    const pipedriveController = PipedriveController({ pipedriveService })
    return pipedriveController.handle
}