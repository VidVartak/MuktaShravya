const { request } = require('express');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get 5 recent Books

router.get('/', async (req, res)=>{ //slash is this route, i.e. /api/books
    const books = await loadCollection('books');
//    res.send(await books.find({}).toArray());
    res.send(await books.find().sort({"book.CreatedAt" : -1}).limit(5).toArray());
}); 

//Search Books
router.post('/search/', async (req, res) =>{
    const books = await loadCollection('books');
    console.log("search book criteria:"+JSON.stringify(req.body))
    res.send(await books.find(req.body).toArray());
})

//Add Book

router.post('/add/', async (req, res) =>{
    const books = await loadCollection('books');
    await books.insertOne({
        book:req.body
    }, {raw:true});

    const authors = await loadCollection('authors');
    await authors.findOneAndUpdate(
        {"EnglishName":req.body.EnglishHeader.Author}, //search Criteria
        { $set: { "EnglishName" : req.body.EnglishHeader.Author, "VernacularName" : req.body.VernacularHeader.Author}, $push : { "Books" : req.body.ArchiveName} } , //push the book
        {upsert:true}
    );

    const readers = await loadCollection('readers');
    await readers.findOneAndUpdate(
        {"EnglishName":req.body.EnglishHeader.Reader}, //search Criteria
        { $set: { "EnglishName" : req.body.EnglishHeader.Reader, "VernacularName" : req.body.VernacularHeader.Reader}, $push : { "Books" : req.body.ArchiveName} } , //push the book
        {upsert:true}
    );

    res.status(201).send(); //201 means something was created OK.

})

//Delete Book
router.delete('/:id', async (req, res)=>{
    const books = await loadCollection('books');
    await books.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})

async function loadCollection(collectionName){
//    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand@boltipustake.lya5g.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:V1dyanand499@cluster0.9bfwv.mongodb.net/BoltiPustake?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true
    });

    return client.db('BoltiPustake').collection(collectionName);
}

module.exports = router;