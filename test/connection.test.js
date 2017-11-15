const chai = require('chai')
const expect = chai.expect
const connection = require('../server/helpers/mongoConnection')

describe('connection test', function () {
  it('mongoose', function () {
    return connection.connect()
  })

  /* it('mssql', () => {
    return sql.connect({
  user: 'user',
  password: 'password',
  server: 'FR\\SQLMAN',
  database: 'Lot'
})
            .then(() => {
              return new sql.Request().query('select champ , champ2  from dbo.Parameters')
            })
            .then((recordset) => {
              return expect(recordset).to.satisfy((arr) => arr.some(r => r.champ === 'Perdu'))
            })
  }) */
})

// 'select IdFonc as Id, Name as Name from dbo.Parameters'
/* config.get('mssqlBase') */
