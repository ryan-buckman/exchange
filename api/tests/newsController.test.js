const request = require('supertest');
const server = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('News API Tests', ()=>{
    it('GET /api/news returns an array of news items', async()=>{
        const response= await request(server).get('/api/news');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an.instanceof(Array);
    })
});