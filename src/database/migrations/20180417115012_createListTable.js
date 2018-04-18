
exports.up = function(knex, Promise) {
	return knex
	.schema
	.createTable('lists', function(t) {
		t.increments()
		t.string('name')
		t.timestamp('createAt')
		 .notNullable()
		 .defaultTo(knex.fn.now())
	})
  
};

exports.down = function(knex, Promise) {
  return knex
  .schema
  .dropTableIfExists('lists')
};
