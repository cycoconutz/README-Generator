// switch() to run through licensure text based on user list-selection
function renderBadge(license) {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "GNU General Public License v2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let badge = renderBadge(data.license);
  return `# ${data.title}

${badge}

## Table of Contents

### [Installation](#installation)

### [Description](#description)

### [Usage](#usage)

### [License](#license)

### [Contributors](#contributors)

### [Contact](#contact)



## Installation:
The application will be invoked by using the following command:
${data.startcmd}


And is dependant upon:
${data.dependencies}


## Description
${data.description}


## Usage
${data.usage}


## License
${data.license}


## Contributors
${data.credit}


## Contact


You can see the code for this project at [${data.github}](www.github.com/${data.github})

You can also reach me personally at my email address: ${data.email}
`
};

module.exports = { generateMarkdown };
