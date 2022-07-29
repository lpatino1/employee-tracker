const cTable = require('console.table');
const { emitKeypressEvents } = require('readline');
const { start } = require('repl');



module.exports = (db) =>{
    db.query('SELECT * FROM department', (err, results)=>{
                if(err){
                    throw err;
                } else {
                    console.table(results);
                    console.log("Press the down arrow to keep going")
                }
            })
}
