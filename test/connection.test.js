const chai = require('chai')
const expect = chai.expect
const connection = require('../dao/baseConnection')

describe('connection test', function(){
    it('mongoose', function(){
        return connection.connect()
    })
})