const employee = require('./employee')

class manger extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }

  getRole() {
    return 'manager'
  }

  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = manger
