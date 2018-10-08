
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (book) => {
        book.increments('id');
        book.string('title');
        book.string('genre');
        book.string('description', 1000);
        book.string('cover_URL');

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
};
