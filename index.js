// node modules
const inquirer = require('inquirer')
const fs = require('fs')
const generateTeam = require('./source/landing-page-template.js')

//library (lib) module
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const manager = require('./lib/manager')

// responds array
const newStaffMemberData = []

// Array object
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your ID number?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'list',
      message: 'What is your role?',
      name: 'role',
      choices: ['Engineer', 'Intern', 'Manager'],
    },
  ])

  // in case of manager position selection, ask these 👇
  if (answers.role === 'Manager') {
    const managerResp = await inquirer.prompt([
      {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
      },
    ])
    const newManager = new manager(
      answers.name,
      answers.id,
      answers.email,
      managerResp.officeNumber
    )
    newStaffMemberData.push(newManager)

    // if engineer's position selected then ask these questions 👇
  } else if (answers.role === 'Engineer') {
    const githubResp = await inquirer.prompt([
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
    ])

    const newEngineer = new engineer(
      answers.name,
      answers.id,
      answers.email,
      githubResp.github
    )
    newStaffMemberData.push(newEngineer)

    // if intern's position selected then ask these questions 👇
  } else if (answers.role === 'Intern') {
    const internResp = await inquirer.prompt([
      {
        type: 'input',
        message: 'What university did you attend?',
        name: 'school',
      },
    ])
    const newIntern = new intern(
      answers.name,
      answers.id,
      answers.email,
      internResp.school
    )
    newStaffMemberData.push(newIntern)
  }
}

async function promptQuestion() {
  await questions()

  const addMemberResp = await inquirer.prompt([
    {
      name: 'addMember',
      type: 'list',
      choices: ['Add a new member', 'Create team'],
      message: 'What would you like to do next?',
    },
  ])

  if (addMemberResp.addMember === 'Add a new member') {
    return promptQuestion()
  }
  return createTeam()
}

promptQuestion()

//! This part is not functioning. I really don't understand by "generateTeam" is not a function?
function createTeam() {
  console.log(newStaffMemberData)
  fs.writeFileSync(
    './output/index.html',
    generateTeam(newStaffMemberData),
    'utf-8'
  )
}
