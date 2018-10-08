
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors_books').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors_books').insert([
        {
          book_key: '1', 
          author_key: '1'
        },
        {
          book_key: '1', 
          author_key: '2'
        },
        {
          book_key: '1', 
          author_key: '3'
        },
        {
          book_key: '2', 
          author_key: '4'
        },
        {
          book_key: '3', 
          author_key: '5'
        },
        {
          book_key: '4', 
          author_key: '6'
        },
        {
          book_key: '5', 
          author_key: '6'
        },
        {
          book_key: '6', 
          author_key: '6'
        },
      ]);
    });
};
