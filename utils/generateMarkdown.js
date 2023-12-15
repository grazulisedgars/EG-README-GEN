// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Licence] (#licence)
  - [Contributing] (#contribution)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  ${data.licence}

  ## Contributing
  ${data.contribution}

  ## Tests 
  ${data.tests}

  ## Questions
  Github: [${data.username}] (https://github.com/${data.username})
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
