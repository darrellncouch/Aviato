
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('local').del()
    .then(function () {
      // Inserts seed entries
      return knex('local').insert([
        {id: 501, name: 'Megan', username: 'mshaffer', email: 'megan@gmail.com', password: 'megan123', city: 'Columbus', state: 'OH'},
        {id: 502, name: 'Ryan', username: 'rshaffer', email: 'ryan@gmail.com', password: 'ryan123', city: 'Columbus', state: 'OH'},
        {id: 503, name: 'Pam', username: 'pshaffer', email: 'pam@gmail.com', password: 'pam123', city: 'Denver', state: 'CO'}
      ]);
    });
};
