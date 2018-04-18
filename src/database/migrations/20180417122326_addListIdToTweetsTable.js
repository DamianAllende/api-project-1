
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.table('tweets', function(t) {
  		t.integer('listId')
  		 .unsigned()
  		 .references('id')
  		 .inTable('lists')
  	})
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.table('tweets', function(t){
  		t.dropForeign('listId')
  		t.dropColumn('listId')
  	})
};
