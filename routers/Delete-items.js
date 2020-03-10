const express = require('express')
var mysqlConnection = require('../db/connection');
const router = new express.Router()
  //Delete specific item
router.delete('/api/item/:itemID', async (req, res) => {
    try{
      await  mysqlConnection.query('DELETE FROM items WHERE ID = ?', [req.params.itemID], (err, rows, fields) => {
          if(!err){
          res.status(200).send("deleteing item");
        }else{
           res.status(200).send(err);
         }
        })
      } catch (e) {
          res.status(400).send(e)
      }
    })
//---------------------------------------------------------------------------------------------------------
//Delete all items
router.delete('/api/items/:userID', async (req, res) => {
    try{
    await  mysqlConnection.query('DELETE FROM items WHERE userID = ?', [req.params.userID], (err, rows, fields) => {
        if(!err)
          res.status(200).send("deleteing all items");
      else
          res.status(200).send(err);
      })
    } catch (e) {
        res.status(400).send(e)
    }
  });


module.exports = router
