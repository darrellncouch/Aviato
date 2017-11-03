
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('travelers').del()
    .then(function () {
      // Inserts seed entries
      return knex('travelers').insert([
        {id: 501, name: 'Andi', username: 'azitney', email: 'andi@gmail.com', password: 'andi123'},
        {id: 502, name: 'Emily', username: 'ezitney', email: 'emily@gmail.com', password: 'emily123'}
      ]);
    });
};
