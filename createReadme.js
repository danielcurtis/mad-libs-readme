const inquirer = require('inquirer');
const fs = require('fs');

function createReadme(input) {
  fs.writeFile('README.md', input, 'utf-8', (err) => {
    if (err) throw err;
    console.log('README.md created.');
  });
}

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of your project?',
  },
  {
    type: 'input',
    name: 'summary',
    message: 'Describe your project in 1-3 sentences:',
  },
  {
    type: 'input',
    name: 'prereqs',
    message: 'System prerequisites (comma delimit reqs)',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Steps to install (comma delimit steps)',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your program?',
  },
  {
    type: 'editor',
    name: 'usageEx',
    message: 'Do you have an example cli command or code to use it? (Opens vim)',
  },
  {
    type: 'input',
    name: 'contSteps',
    message: 'What steps should contributors take? (comma delimit steps)',
  },
  {
    type: 'input',
    name: 'authors',
    message: 'Who are the authors? (comma delimit names)',
  },
  {
    type: 'input',
    name: 'awk',
    message:
      'Do you have any acknowledgements for the project? (comma delimit acknowledgements)',
  },
  {
    type: 'input',
    name: 'contNames',
    message:
      "Are there any contributors you'd like to name? (comma delimit names)",
  },
];

console.log(`If you don't have an answer, leave it blank by pressing enter.`);

inquirer.prompt(questions).then((ans) => {
  const prereqsArr = ans['prereqs'].split(',');
  const installArr = ans['install'].split(',');
  const contStepsArr = ans['contSteps'].split(',');
  const authorsArr = ans['authors'].split(',');
  const awkArr = ans['awk'].split(',');
  const contNamesArr = ans['contNames'].split(',');
  let prereqs = ``;
  let install = ``;
  let contSteps = ``;
  let authors = ``;
  let awk = ``;
  let contNames = ``;
  prereqsArr.map((el) => {
    prereqs += `- ${el}\n`;
  });
  installArr.map((el, i) => {
    install += `${i+1}. ${el}\n`;
  });
  contStepsArr.map((el, i) => {
    contSteps += `${i+1}. ${el}\n`;
  });
  authorsArr.map((el) => {
    authors += `- ${el}\n`;
  });
  awkArr.map((el) => {
    awk += `- ${el}\n`;
  });
  contNamesArr.map((el) => {
    contNames += `- ${el}\n`;
  });

  const input = `# ${ans['title']}

${ans['summary']}

## Prerequisites

${prereqs}

## Installation

${install}

## Usage

${ans['usage']}

#### Simple Example

\`\`\`
${ans['usageEx']}
\`\`\`

## Contributing

${contSteps}

## Contributors & Acknowledgements

#### Authors

${authors}

#### Acknowledgements

${awk}

#### Contributors

${contNames}
`;

  createReadme(input);
});
