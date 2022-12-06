const manager = require('../lib/manager')
const employee = require('../lib/employee')

test('Can set office number via constructor argument', () => {
  const testValue = 100
  const e = new manager('Iqbal', 1, 'test@test.com', testValue)
  // testing a value along with the matcher function toBe(testValue)
  expect(e.officeNumber).toBe(testValue)
})

test('getRole() should return "manager"', () => {
  const testValue = 'manager'
  const e = new manager('Iqbal', 1, 100)
  expect(e.getRole()).toBe(testValue)
})

test('Can get office number via getOffice()', () => {
  const testValue = 100
  const e = new manager('Iqbal', 1, 'test@test.com', testValue)
  expect(e.getOfficeNumber()).toBe(testValue)
})
