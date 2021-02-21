const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Search Userss
router.post('/search/', async (req, res) =>{
    console.log("in search, body:"+JSON.stringify(req.body))
    const users = await loadUsersCollection();
    res.send(await users.find(req.body).toArray());
})

//Add User

router.post('/add/', async (req, res) =>{
    const users = await loadUsersCollection();
    await users.insertOne({
        user:req.body
    }, {raw:true});
    res.status(201).send(); //201 means something was created OK.

})

//Delete User
router.delete('/:id', async (req, res)=>{
    const users = await loadUsersCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})

async function loadUsersCollection(){
//    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand@boltipustake.lya5g.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand499@cluster0.9bfwv.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true
    });

    return client.db('BoltiPustake').collection('users');
}
module.exports = router;