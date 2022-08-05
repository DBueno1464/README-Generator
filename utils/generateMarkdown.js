// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  - [Description](#Description)
  - [Installations](#Installations)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installations
  ${data.install}  
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.user}
  ${data.email}
  ${data.instructions}


  
  © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
  
`;
}
// module.exports = generateMarkdown;
