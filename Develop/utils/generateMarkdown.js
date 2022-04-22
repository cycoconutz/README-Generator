const license = value => {
  switch (value) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "GNU":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "ISC":
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    default:
      return "";
  }
};

// switch() to run through licensure text based on user list-selection
const licenseFieldText = (value, name) => {
  switch (value) {
    case "MIT":
      return 'Copyright © 2020 ' + name;
    case "GNU":
      return 'Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>';
    case "ISC":
      return 'Copyright 2020 ' + name;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title} using ${data.license}

        ## Table of Contents
        [Installation](https://github.com/cycoconutz/README-Generator/tree/main/Develop#installation)

        [Description](https://github.com/cycoconutz/README-Generator/tree/main/Develop#description)

        [Usage](https://github.com/cycoconutz/README-Generator/tree/main/Develop#usage)

        [License](https://github.com/cycoconutz/README-Generator/tree/main/Develop#license)

        [Contributors](https://github.com/cycoconutz/README-Generator/tree/main/Develop#contributors)

        [Contact Information](https://github.com/cycoconutz/README-Generator/tree/main/Develop#contact-information)

        --------------------------------------------------------

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
        ${licenseFieldText(data.license, data.name)}

        ## Contributors
        ${data.credit}

        ## Contact Information

        You can see the code for this project at www.github.com / ${data.github}
        You can also reach me personally at my email address: ${data.email}

`
};

module.exports = { generateMarkdown };
