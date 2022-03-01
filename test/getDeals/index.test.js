import axios from "axios";
import sinon from 'sinon'
import chai from 'chai'
import chaiPromise from 'chai-as-promised'
import responseMock from './mock/AxiosResponseMock.mock.js'
import { getDealsPipedriveFactory } from "../../src/Pipedrive/factory/GetDealsFactory/getDealsFactory.js";
import { PostDealsPipedriveFactory } from "../../src/Pipedrive/factory/PostDealsFactory/PostDealsFactory.js";
 const expect = chai.expect
chai.use(chaiPromise)

let mockDependencies = {};
describe('#Test suite for API', () => {
    before(() => {
        mockDependencies.axiosResponse = {
            data: responseMock
        }
        sinon.stub(axios, 'get').resolves(mockDependencies.axiosResponse.data)
    })
    console.log(mockDependencies)
    it('should return a json with deals of pipedrive', async () => {
        const result = await axios.get()
        expect(result).to.be.a('object')
        expect(result).to.equal(mockDependencies.axiosResponse.data)
    })
    it('should insert deals in bling and in DB' , async () => {
     sinon.stub(PostDealsPipedriveFactory, ).resolves('Ok')
        console.log(await PostDealsPipedriveFactory())
    })


})