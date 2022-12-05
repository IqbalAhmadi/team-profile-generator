const employee = require('../lib/employee')

test('Can instantiate employee instance', () => {
  const e = new employee()
  expect(typeof e).toBe('object')
})

test('Can set name via constructor arguments', () => {
  const name = 'Baran'
  const e = new employee(name)
  expect(e.name).toBe(name)
})

test('Can set id via constructor argument', () => {
  const testValue = 100
  const e = new employee('Iqbal', testValue)
  expect(e.id).toBe(testValue)
})

test('Can set email via constructor argument', () => {
  const testValue = 'Baran'
  const e = new employee(testValue)
  expect(e.getName()).toBe(testValue)
})

test('Can get id via getId()', () => {
  const testValue = 100
  const e = new employee('Iqbal', testValue)
  expect(e.getId()).toBe(testValue)
})

test('Can get email via getEmail()', () => {
  const testValue = 'test@test.com'
  const e = new employee('Iqbal', 1, testValue)
})

test("getRole() should return 'employee'", () => {
  const testValue = 'employee'
  const e = new employee('Baran', 1, 'test@test.com')
  expect(e.getRole()).toBe(testValue)
})
