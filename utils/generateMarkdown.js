// const index = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licensing) {
  if (licensing === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (licensing === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if (licensing === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (licensing === "None") {
    return ""

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licensing) {
  if (licensing === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)"
  }
  else if (licensing === "Boost") {
    return "[Boost](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if (licensing === "Apache") {
    return "[Apache](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (licensing === "None") {
    return ""

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensing) {
return `## License: 
${licensing}
${renderLicenseBadge(licensing)}

${renderLicenseLink(licensing)}
`
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (readmeInfo) => {
  return readmeInfo.map(mdInfo => {
return `# ${mdInfo.title}
## Table of Contents:
- [Author](#author)
- [GitHub](#github-username)
- [Repo](#repo-name)
- [Description](#description)
- [Installation](#installation-instructions)
- [License](#license)
## Author: 
${mdInfo.author}
## GitHub Username: 
${mdInfo.github}
## Repo Name: 
${mdInfo.repo}
## Description: 
${mdInfo.description}
## Installation Instructions: 
${mdInfo.install}
${renderLicenseSection(mdInfo.licensing)}
`
}
).join(" ");
}

module.exports = generateMarkdown;
