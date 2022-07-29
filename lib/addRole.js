const cTable = require('console.table');
const inquirer = require('inquirer');


module.exports =(db) =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter role name:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter salary:',
        },
        {
            type: 'input',
            name: 'department',
            message: 'Enter department ID:',
        },
    ])
    .then(ans=>{
        JSON.stringify(ans);

        db.query('INSERT INTO role(title, salary, department_id) VALUES (?,?,?);', [`${ans.title}`,`${ans.input}`,`${ans.department}`], (err, results)=>{
            if(err){
                throw err;
            } else {
                console.table(`New role ${ans.title} has been created`);
                console.log("Press the down arrow to keep going")
            }
            
        });
        
    })
}