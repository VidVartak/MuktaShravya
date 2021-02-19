const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Books

router.get('/', async (req, res)=>{ //slash is this route, i.e. /api/books
    console.log("server side filter called with value:"+JSON.stringify(req.body))
    const books = await loadBooksCollection();
    res.send(await books.find({"book.tags":{$all:req.body}}).toArray());
}); 

async function loadBooksCollection(){
//    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand@boltipustake.lya5g.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand499@cluster0.9bfwv.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true
    });

    return client.db('BoltiPustake').collection('books');
}
module.exports = router;