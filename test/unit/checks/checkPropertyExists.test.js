const { sequelize, dataTypes, checkPropertyExists } = require('../../../src')
const SimpleModel = require('../../models/Simple')

describe('src/checkPropertyExists', () => {
  const Model = SimpleModel(sequelize, dataTypes)
  const instance = new Model()
  describe('happy path', () => {
    ;['name'].forEach(checkPropertyExists(instance))
  })

  describe('unhappy path', () => {
    it('fails the test', () => {
      try {
        checkPropertyExists(instance)('no name')
      } catch (e) {
        expect(e).toBeTruthy()
      }
    })
  })
})
