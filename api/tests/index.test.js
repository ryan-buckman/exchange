const config = require('../configuration/config');
let server = require('../src/index');
let chai = require('chai');

let expect = chai.expect;

describe('Server', ()=>{
    it('tests that server is running current port', async()=>{
        expect(server.port).to.equal(config.port) 
    })
});