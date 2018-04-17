const data = [{
  name: 'FrontEnd Developers'
},{
  name: 'BackEnd Developers'
}]

exports.seed = function(knex, Promise) {
  return knex('lists').del()
    .then(function() {
      return knex('lists')
        .insert(data)
    });
}
