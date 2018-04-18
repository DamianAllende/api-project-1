
exports.up = function(knex, Promise) {
  // crear la tabla
  return knex
    .schema
    .createTable('tweets', function(t) {
      t.increments();
      t.string('description');
      t.timestamp('createdAt')
       .notNullable()
       .defaultTo(knex.fn.now());
      t.integer('likes');
      t.integer('retweets');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('tweets')
};

