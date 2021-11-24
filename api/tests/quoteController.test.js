const request = require('supertest');
const server = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('Quote API Tests', ()=>{
    it('GET /api/quote returns a quote object', async()=> {
        const response= await request(server).get('/api/quote?symbol=AAPL');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Object);
    })
});