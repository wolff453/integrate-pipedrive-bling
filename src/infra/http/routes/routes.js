import express from 'express'
import { getDealsPipedriveFactory } from '../../../Pipedrive/factory/GetDealsFactory/getDealsFactory.js'
import { PostDealsPipedriveFactory } from '../../../Pipedrive/factory/PostDealsFactory/PostDealsFactory.js'


const pipedrive = express.Router()
pipedrive.get('/deals', getDealsPipedriveFactory())
pipedrive.post('/insert/deals', PostDealsPipedriveFactory())
export default pipedrive
