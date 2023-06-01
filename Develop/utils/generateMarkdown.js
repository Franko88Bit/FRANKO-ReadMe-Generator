function generateMarkdown(userResponses, userInfo) {

  let readMeText = `## Table of Contents`;

  if (userResponses.installation !== '') {
    readMeText += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') {
    readMeText += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') {
    readMeText += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') {
    readMeText += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let draftMarkdown =
    `# ${userResponses.title}
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}

  `

  // Add Table of Contents to markdown
  draftMarkdown += readMeText;

  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;


  // Optional Installation section
  if (userResponses.installation !== '') {

    draftMarkdown +=
      `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };


  // Optional Usage section
  if (userResponses.usage !== '') {

    draftMarkdown +=

      `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };


  // Optional Contributing section
  if (userResponses.contributing !== '') {

    draftMarkdown +=

      `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`
  };


  // Optional Tests section
  if (userResponses.tests !== '') {

    draftMarkdown +=
      `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  draftMarkdown +=
    `
  
  ## License
  
  ${userResponses.license}
  `;


  // Questions / About Developer section
  let draftDev =
    `
  ---
  
  ## Questions?
  
  For any questions, please contact me with the information below at Franks1988@icloud.com
  `;

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;

}

module.exports = generateMarkdown;