const intern = require('../lib/intern')

test('Cab set school via constructor', () => {
  const testValue = 'UCD'
  const e = new intern('Iqbal', 1, 'test@test.com', testValue)
  expect(e.school).toBe(testValue)
})

test("getRole() should return 'intern'", () => {
  const testValue = 'intern'
  const e = new intern('Iqbal', 1, 'test@test.com', 'UCD')
  expect(e.getRole()).toBe(testValue)
})

test('Can get school via getSchool()', () => {
  const testValue = 'UCD'
  const e = new intern('Iqbal', 1, 'test@test.com', testValue)
  expect(e.getScool()).toBe(testValue)
})
