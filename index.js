// route design
// {post}   api/users/register *
// {post}   api/users/login *
// {get}    api/items/:userID *
// {get}    api/item/:itemID *
// {post}   api/items/:userID *
// {put}    api/items/:itemID *
// {delete} api/item/:itemID *
// {delete} api/items/:userID *
//------------------------------------------------start project-------------------------
const mysql = require('mysql')
const express = require('express')
var sha1 = require('sha1')
mysqlConnection = require('./db/connection')
const userRouter = require('./routers/user')
const ItemRouter = require('./routers/get-items')
const postputitemsRouter = require('./routers/post-put-items')
const DeleteitemsRouter = require('./routers/Delete-items')
var app = express()
date = new Date()
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(userRouter)
app.use(ItemRouter)
app.use(postputitemsRouter)
app.use(DeleteitemsRouter)
//---------------------------------------------------------------------------------------------------------
const port = process.env.PORT || 8086;
app.listen(port , ()=>console.log(`listening on port ${port}`));
//---------------------------------------------------------------------------------------------------------
