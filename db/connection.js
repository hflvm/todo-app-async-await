const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo-app',
    multipleStatements: true
});
//---------------------------------------------------------------------------------------------------------
//database connection
function connection(){
  return new Promise(fn);
   function fn(resolve,reject){
     mysqlConnection.connect((err) => {
         if (err)
             return reject(('DB connection failed \n Error : ' + err));
         else{
           return resolve('DB connection succeded.');
         }

     });
  }
}
connection()
.then(() =>{
  console.log("DB connection succeded");
})
.catch((err)=> {
  console.log(err);
});
module.exports = mysqlConnection;
