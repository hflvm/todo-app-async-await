const express = require('express')
var mysqlConnection = require('../db/connection');
var sha1 = require('sha1')
date = new Date()
const router = new express.Router()
//register user
router.post('/api/users/register', async (req, res) => {
    let doc = req.body;
    var sql = "INSERT INTO Users(userName,password,email,phone,address,date) VALUES ?";
var values =[[doc.userName,sha1(doc.password),doc.email,
doc.phone,doc.address,date]];
try{
  await  mysqlConnection.query(sql, [values], (err, rows, fields) => {
        res.status(200).send("inserted users")
    })
} catch(e){
  res.status(400).send(e)
}
})
//---------------------------------------------------------------------------------------------------------
//login
router.post('/api/users/login', async (req, res) => {
	var userName = req.body.userName;
	var password = sha1(req.body.password);
  try{
	   if (userName && password) {
   	await	mysqlConnection.query('SELECT * FROM Users WHERE userName = ? AND password = ?', [userName, password], function(error, results, fields) {
        if (results.length > 0)
      res.status(200).send('login succeded.');
			 else
				res.status(200).send('Incorrect Username and/or Password!');
		});
	} else {
		res.status(200).send('Please enter Username and Password!');
		res.end();
	}
}catch (e){
  res.status(400).send(e)
}
});
//---------------------------------------------------------------------------------------------------------
module.exports = router
