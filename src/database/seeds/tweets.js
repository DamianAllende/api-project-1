const data = [{
  description: 'My first tweet',
  likes: 20,
  retweets: 35,
  listId: 1
}, {
  description: 'Second tweet',
  likes: 20000,
  retweets: 35000,
  listId: 2
},{
  description: 'Hello tweet',
  likes: 20,
  retweets: 3500,
  listId: 2
},{
  description: 'damian tweet',
  likes: 60,
  retweets: 300,
  listId: 2
}]

exports.seed = function(knex, Promise) {
  return knex('tweets').del()
    .then(function() {
      return knex('tweets')
        .insert(data)
    });
}
