const cTable = require('console.table');
const inquirer = require('inquirer');



module.exports = (db) =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter employee\'s first name:',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter employee\'s last name:',
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter employee\'s role ID:',
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Enter employee\'s manager ID:',
        },
    ])
    .then(ans=>{
        JSON.stringify(ans);

        db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);', [`${ans.first_name}`,`${ans.last_name}`,`${ans.role}`,`${ans.manager}`], (err, results)=>{
            if(err){
                throw err;
            } else {
                console.table(`New employee ${ans.first_name} ${ans.last_name}has been created`);
                console.log("Press the down arrow to keep going");
            }
        })
    })
}