const express = require('express')
var mysqlConnection = require('../db/connection');
date = new Date()
const router = new express.Router()
//add new item
router.post('/api/items/:userID', async (req, res) => {
    let doc = req.body;
    var sql = "INSERT INTO items(userID,Name,Date) VALUES ?";
var values =[[req.params.userID,doc.Name,date]];
try{
  await  mysqlConnection.query(sql, [values], (err, rows, fields) => {
      if (!err)
        res.status(200).send("inserted item");
      else
          res.status(200).send("error => "+err);
    })
  }catch(e){
    res.status(400).send(e)
  }
})
//-----------------------------------------------------------------------------------------------
//Update an item
router.put('/api/items/:itemID', async (req, res) => {
        let doc = req.body;
        var sql = "UPDATE items SET Name = ?, Date = ? WHERE ID = ?";
try{
      await  mysqlConnection.query(sql, [doc.Name,date,req.params.itemID], (err, rows, fields) => {
          if (!err)
            res.status(200).send("update item");
          else
              res.status(200).send(err);
        })
    }catch (e) {
        res.status(400).send(e)
    }
    })
//---------------------------------------------------------------------------------------------------------
module.exports = router
