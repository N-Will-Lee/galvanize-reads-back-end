
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', (author) => {
        author.increments('id');
        author.string('author_first_name');
        author.string('author_last_name');
        author.string('author_bio', 1000);
        author.string('author_portrait_URL');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors');
};
