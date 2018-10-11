const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

function listAllBooks()  {
    return knex('books');
}
function getBookById(id)    {
    return knex('books').where('id', id);
}
function createBook(newBook)   {
    return knex('books').insert(newBook).returning('*');
}
function updateBookById(book, id) {
    return knex('books').update(book).where('id', id);
}
function deleteBook(id) {
    return knex('books').where('id', id).delete();
}
function listAllAuthors()  {
    return knex('authors');
}
function getAuthorById(id)    {
    return knex('authors').where('id', id);
}
function createAuthor(newAuthor)   {
    return knex('authors').insert(newAuthor).returning('*');
}
function updateAuthorById(author, id) {
    return knex('authors').update(author).where('id', id);
}
function deleteAuthor(id) {
    return knex('authors').where('id', id).delete();
}
function authorsOfBook(id)  {
    return knex.from('authors_books').innerJoin('authors', 'authors_books.author_key', 'authors.id');
}
function getEverything() {
    return knex('authors')
        .from('authors')
        .orderBy('authors.id', 'asc')
        .fullOuterJoin('authors_books', 'authors.id', 'authors_books.author_key') 
        .fullOuterJoin('books', 'books.id', 'authors_books.book_key') 
}

module.exports = {
    listAllBooks,
    getBookById,
    createBook,
    deleteBook,
    updateBookById,
    listAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthorById,
    deleteAuthor,
    authorsOfBook,
    getEverything
}