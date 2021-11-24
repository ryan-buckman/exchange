const config = require('config');
const server = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('Server', ()=>{
    it('tests that server is running current port', async()=>{
        expect(server.port).to.equal(config.get('port')) 
    })
});