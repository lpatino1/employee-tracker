const cTable = require('console.table');
const inquirer = require('inquirer');


module.exports = (db) =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'Enter department name:'
        }
    ])
    .then(ans=>{
        JSON.stringify(ans);

        db.query('INSERT INTO department(name) VALUES (?);', [`${ans.department_name}`], (err, results)=>{
            if(err){
                throw err;
            } else {
                console.table(`New department ${ans.department_name} has been created`);
                console.log("Press the down arrow to keep going")
            }
        })

    })
}