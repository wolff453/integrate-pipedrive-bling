import { PipedriveRepository } from "../../repository/pipedriveRepository.js"
import { PipedriveService } from '../../services/PipedriveService.js'
import { GetController } from "../../controllers/GetController/GetController.js"
import config from '../../../../config/index.js'
import mongo from "../../../../common/lib/mongo/index.js"

export const getDealsPipedriveFactory = () => {
    const pipedriveRepository = PipedriveRepository({ mongo })
    const pipedriveService = PipedriveService({ config, pipedriveRepository })
    const pipedriveController = GetController({ pipedriveService })
    return pipedriveController.handle
}