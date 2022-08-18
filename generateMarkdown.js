// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# ${data.License}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${data.License}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Information](#contact-information)

  ## Description
  ${data.Description}
  ## License
  ${data.License}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Contribution
  ${data.Contribution}
  ## Testing
  ${data.Test}
  ## Contact Information
  - Github: [${data.Github}](https://github.com/${data.Github})
  - Email: [${data.Email}](mailto:user@example.com)

  `;
 }

 module.exports = generateMarkdown;