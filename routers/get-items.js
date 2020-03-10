const express = require('express')
var mysqlConnection = require('../db/connection');
const router = new express.Router()
//Get all items
router.get('/api/items/:userID', async (req, res) =>{
  try {
   await  mysqlConnection.query('SELECT * FROM items WHERE userID = ?',
    [req.params.userID], (err, rows, fields) => {
      if(rows != 0){
        res.status(200).send(rows)
      }else{
        res.status(200).send("no found items in this user")
      }
    })
}catch(e){
    res.status(400).send(e)
  }
})
//---------------------------------------------------------------------------------------------------------
//Get specific item
router.get('/api/item/:itemID', async (req, res) => {
  try{
   await  mysqlConnection.query('SELECT * FROM items WHERE ID = ?', [req.params.itemID], (err, rows, fields) => {
        if (rows != 0)
        res.status(200).send(rows);
        else
          res.status(200).send("no found this item in items ");
    })
  }catch(e){
    res.status(400).send(e)
  }
});
//-----------------------------------------------------------------------------------------------------
module.exports = router
