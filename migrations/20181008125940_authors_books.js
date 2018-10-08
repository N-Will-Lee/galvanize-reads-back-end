
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors_books', (entry) => {
        entry.increments('id');
        entry.integer('book_key');
        entry.integer('author_key');
        
        entry.foreign('book_key').references('id').inTable('books');
        entry.foreign('author_key').references('id').inTable('authors');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors_books');
};
