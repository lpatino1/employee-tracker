// const cTable = require('console.table');
// const inquirer = require('inquirer');



// module.exports = (db) =>{
//      let employees = [];
//     function getEmployees(db){
//       employees = [ db.query('SELECT id AS employee_id FROM employee')];
//       update();
//     }
    
//     function update (db, employees){
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'cEmployee',
//             message: 'Choose an employee to update:',
//             choices: employees
//         }
//     ])
//     .then(ans=>{
//         JSON.stringify(ans);
        
//         // db.query('INSERT INTO department(name) VALUES (?);', [`${ans.department_name}`], (err, results)=>{
//         //     if(err){
//         //         throw err;
//         //     } else {
//         //         console.table(`New department ${ans.department_name} has been created`);
//         //         console.log("Press the down arrow to keep going")
//         //     }
//         // })

//     })
// }
// getEmployees();

// }