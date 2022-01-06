const request = require('supertest');
const server = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('Stock Symbol API Tests', ()=>{
    it('GET /api/stock returns a stock symbol object', async()=> {
        const response= await request(server).get('/api/stock?exchange=US');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
    })
});