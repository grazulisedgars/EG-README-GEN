// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.badge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [Link](#link)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  This project is licensed under the ${data.licence}

  ## Contributing
  ${data.contribution}

  ## Tests 
  ${data.tests}

  ## Link

  ## Questions

  If you have any questions or need further assistance, please reach out to: 
  Github: [${data.username}] (https://github.com/${data.username})
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
