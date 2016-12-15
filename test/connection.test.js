const chai = require('chai')
const expect = chai.expect
const connection = require('../dao/baseConnection')
const sql = require('mssql')
const config = require('config')

const config2 = {
    user: 'user',
    password: 'password',
    server: 'FR\\SQLMAN',
    database: 'Lot'
}

const config1 = config.get('mssqlBase')

describe('connection test', function(){
    it.skip('mongoose', function(){
        return connection.connect()
    })

    it('mssql', () => {
        console.log(config1)
        console.log(config2)
        return sql.connect(config2)
            .then(() => {
                return new sql.Request().query('select champ , champ2  from dbo.Parameters')
            })
            .then((recordset) => {
                console.log(recordset)
                return expect(recordset).to.satisfy((arr) => arr.some(r => r.champ === 'Perdu'))
            })
    })
})

// 'select IdFonc as Id, Name as Name from dbo.Parameters'
/*config.get('mssqlBase')*/