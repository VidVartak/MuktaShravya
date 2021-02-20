const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Books

router.get('/', async (req, res)=>{ //slash is this route, i.e. /api/books
    const books = await loadBooksCollection();
//    res.send(await books.find({}).toArray());
    res.send(await books.find().sort({"book.CreatedAt" : -1}).limit(5).toArray());
}); 

//Search Books
router.post('/search/', async (req, res) =>{
    console.log("in search, body:"+JSON.stringify(req.body))
    console.log("in search, params:"+JSON.stringify(req.params))
    console.log("in search, data:"+JSON.stringify(req.data))
    const books = await loadBooksCollection();
    res.send(await books.find(req.body).toArray());
})

router.get('/:id', async (req, res)=>{ //slash is this route, i.e. /api/books
    console.log("get with id called, id:"+req.params.id)
    const books = await loadBooksCollection();
    res.send(await books.find({_id:new mongodb.ObjectID(req.params.id)}).toArray());
}); 

//Add Book

router.post('/add/', async (req, res) =>{
    const books = await loadBooksCollection();
    await books.insertOne({
        book:req.body
    }, {raw:true});
    res.status(201).send(); //201 means something was created OK.

})

//Delete Book
router.delete('/:id', async (req, res)=>{
    const books = await loadBooksCollection();
    await books.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})

async function loadBooksCollection(){
//    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand@boltipustake.lya5g.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand499@cluster0.9bfwv.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true
    });

    return client.db('BoltiPustake').collection('books');
}
module.exports = router;