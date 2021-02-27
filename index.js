const fs = require('fs');
const inquirer = require('inquirer');



inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',

      },
      {
        type: 'input',
        name: 'hometown',
        message: 'Where are you from?',
      },
  ])
  .then(answers => {

    

    fs.appendFile('index.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    
  
    <h1>Hi!  My Name is ${answers.name}</h1>
    <h2>My favorite Hobby is ${answers.hobby}</h2>
    <h2>I am from ${answers.hometown}</h2>
    
    </body>
    </html> `
    , (err) => {
        if(err){
            console.log("error");
        } else {
            console.log("success!");
        }
    }
    );
  })
//   .catch(error => {
//     if(error.isTtyError) {
 
//     } else {
//       // Something else went wrong
//     }
//   });