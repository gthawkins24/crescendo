// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license === "none") {
      return "";
    } else {
      return `![GitHub License](https://img.shields.io/badge/license-${license}-lightgrey.svg)`
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  
  function renderLicenseLink(license) {
    if (license == 'MIT') {  
      return "https://opensource.org/licenses/MIT";
    } if (license == 'Mozilla-Public') {
      return "https://opensource.org/licenses/MPL-2.0";
    } if (license == 'Apache') {
      return "https://opensource.org/licenses/Apache-2.0";
    } else {
      return "";
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  
  function renderLicenseSection(license) {
    if (license === "none") {
      return "";
    } else {
      return `## License 
    
    Distributed under the ${license} License.`
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const githubLink = `https://github.com/${data.username}`
    return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
  
  
      ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)
     
      ## Description
      ${data.description} Crescendo is a Reddit-like, music-centered, social media site.
      Users can create Circles (similar to communities), create threads in discussion boards and add comments
      
      

      ## Installation
      ${data.installation} Technologies Used: Auth0, Express, EJS, CSS, Nodemon, Node, Heroku, Bootstrap, Sequelize

  
      ## Usage
      ${data.usage} Crescendo is a simple site that allows for the sharing of music/bands/songs in threads that are grouped with similar styles/genres of music.
      As music fans, we found that most social media platforms can be convoluted with new music discovery. We wanted a platform that makes it easier to find other people with similar music tastes.
      As a user, I can create a Circle around a single musical topic where other users can make posts centered around that topic and comment on each other’s posts, fostering conversation and musical discovery.
      
  
      ## License
      ${renderLicenseSection(data.license)}
  
      ## Contributing
      Contributers: ${data.contributing} Christopher: Basic framework, styling, Heroku deployment
      Tyler: Created databases and relationships, views and displaying content
      Benjamin: Created professional ReadMe
      
  
  
      ## Tests
      Run '${data.tests}' to start project
  
      ## Questions
      GitHub Profile: ${githubLink}
      Reach me at ${data.email} with additional questions
   
    `;
  }
  
  
  module.exports = generateMarkdown;
  