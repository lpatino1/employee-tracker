const cTable = require('console.table');


module.exports = (db) =>{
    db.query('SELECT * FROM employee', (err, results)=>{
                if(err){
                    throw err;
                } else {
                    console.table(results);
                    console.log("Press the down arrow to keep going")
                }
            })
}
