// html for the whole team
const generateTeam = (team) => {
  // manager's html 🤵
  const generateManager = (manager) => {
    // console.log(manager)
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
  }

  // engineer's html
  const generateEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `
  }

  // intern's html
  const generateIntern = (intern) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
    `
  }

  const html = []
  html.push(
    team
      //   .filter((employee) => {
      // employee.getRole() === 'manager'
      // console.log(employee.getRole())

      .filter((employee) => employee.getRole() === 'manager')
      .map((manager) => generateManager(manager))
      .join('')

    //   .map((manager) => {
    //     generateManager(manager)
    //     console.log(manager)
    //   })
  )
  html.push(
    team
      .filter((employee) => employee.getRole() === 'engineer')
      .map((engineer) => generateEngineer(engineer))
      .join('')
  )
  html.push(
    team
      .filter((employee) => employee.getRole() === 'intern')
      .map((intern) => generateIntern(intern))
      .join('')
  )
  //   console.log('This is HTML', html)
  return html.join('')
}
// generate html page
const team = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
    ">
    <link rel="stylesheet" href="./styles.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Team Profile</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
`
}

module.exports = team
