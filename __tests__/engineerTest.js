const engineer = require('../lib/engineer')

test('Can set GitHub account via constructor', () => {
  const testValue = 'GitHubUser'
  const e = new engineer('Iqbal', 1, 'test@test.com', testValue)
  expect(e.github).toBe(testValue)
})

test("getRole() should return 'engineer'", () => {
  const testValue = 'engineer'
  const e = new engineer('Iqbal', 1, 'test@test.com', testValue)
  expect(e.github).toBe(testValue)
})

test("getRole() should return 'engineer'", () => {
  const testValue = 'engineer'
  const e = new engineer('Iqbal', 1, 'test@test.com', 'GitHubUser')
  expect(e.getRole()).toBe(testValue)
})

test('Can get Github username via getGithub()', () => {
  const testValue = 'GitHubUser'
  const e = new engineer('Iqbal', 1, 'test@test.com', testValue)
  expect(e.getGithub()).toBe(testValue)
})
