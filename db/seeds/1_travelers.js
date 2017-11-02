
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('travelers').del()
    .then(function () {
      // Inserts seed entries
      return knex('travelers').insert([
        {id: 501, name: 'Andi', username: 'azitney', email: 'andi@gmail.com', password: 'andi123'},
        {id: 502, name: 'Emily', username: 'ezitney', email: 'emily@gmail.com', password: 'emily123'},
        {id: 503, name: 'Andrew', username: 'zitneya', email: 'andrew@gmail.com', password: 'andrew123'},
        {id: 504, name: 'Cindy', username: 'czitney', email: 'cindy@gmail.com', password: 'cindy123'}
      ]);
    });
};
