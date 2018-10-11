 const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const queries = require('./queries');
const port = process.env.PORT || 5555;



app.use(bodyParser.json());
app.use(cors());

app.get('/books', (req, res) =>  {
    queries.listAllBooks().then((data)   =>  {
        res.json({data});
    });
});
app.get('/books/:id', (req, res) =>    {
    
    queries.getBookById(req.params.id).then((data) => {
        res.json({data});
    });
});
app.post('/books', (req, res) => {
    queries.createBook(req.body)
    .then((data) => {
        res.json({data});
    });
});
app.put('/books/:id', (req,res) =>   {
    queries.updateBookById(req.body, req.params.id).then(updatedBook => res.json({data: updatedBook}))
})
app.delete('/books/:id', (req, res) => {
    queries.deleteBook(req.params.id).then((data) =>    {
        res.json({data});
    });
});
//author requests
app.get('/authors', (req, res) =>  {
    queries.listAllAuthors().then((data)   =>  {
        return res.json({data});
    });
});
app.get('/authors/:id', (req, res) =>    {
    
    queries.getAuthorById(req.params.id).then((data) => {
        res.json({data});
    });
});
app.post('/authors', (req, res) => {
    queries.createAuthor(req.body)
    .then((data) =>    res.json({data})
    );
});
app.put('/authors/:id', (req,res) =>   {
    queries.updateAuthorById(req.body, req.params.id).then(updatedAuthor => res.json({data: updatedAuthor}))
})
app.delete('/authors/:id', (req, res) => {
    queries.deleteAuthor(req.params.id).then((data) =>    {
        res.json({data});
    });
});

app.get('/authors_books/:id', (req, res) =>    {
    queries.authorsOfBook(req.params.id).then((data) => {
        res.json({data});
    });
});

app.get('/authors_books', (req, res) =>    {
    queries.getEverything().then((data) => {
        res.json({data});
    });
});




app.listen(port, () =>  {
    console.log(`listening on ${port}`);
});
