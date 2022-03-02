import chai from 'chai'
import chaiPromise from 'chai-as-promised'
import responseMock from './mock/AxiosResponse.mock.js'
import { PipedriveService } from "../../src/Pipedrive/services/PipedriveService.js";
import XmlProvider from "../../providers/XmlProvider/index.js";

const expect = chai.expect
chai.use(chaiPromise)

let mockDependencies = {};

describe('#Test suite for API', () => {
  before(() => {
    mockDependencies = {
      axiosResponse: {
        data: responseMock,
      },
      response: {
        send: async () => Promise.resolve('Data entered succesfully'),
      },
      request: 'Mock',
      pipedriveService: PipedriveService({ xml: XmlProvider }),
    }
  })


  it('should return a json with deals of pipedrive', async () => {
    mockDependencies.pipedriveService.getAllWonStatus = async () => Promise.resolve(mockDependencies.axiosResponse.data)
    const result = await mockDependencies.pipedriveService.getAllWonStatus()
    expect(result).to.be.a('object')
    expect(result).to.equal(mockDependencies.axiosResponse.data)
  })

  it('shoud throw error if axios response is null or undefined', async () => {
    mockDependencies.pipedriveService.getAllWonStatus = async () => Promise.resolve(null)
    const result = await mockDependencies.pipedriveService.getAllWonStatus()
    await expect(mockDependencies.pipedriveService.insertDealsInBling(result)).to.rejectedWith(Error)

  })
})
