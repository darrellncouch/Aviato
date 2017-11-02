
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('local').del()
    .then(function () {
      // Inserts seed entries
      return knex('local').insert([
        {id: 501, name: 'Megan', username: 'mshaffer', email: 'megan@gmail.com', password: 'megan123', city: 'Phoenix', state: 'AZ'},
        {id: 502, name: 'Ryan', username: 'rshaffer', email: 'ryan@gmail.com', password: 'ryan123', city: 'Columbus', state: 'OH'},
        {id: 503, name: 'Chris', username: 'cshaffer', email: 'chris@gmail.com', password: 'chris123', city: 'San Diego', state: 'CA'},
        {id: 504, name: 'Pam', username: 'pshaffer', email: 'pam@gmail.com', password: 'pam123', city: 'Denver', state: 'CO'}
      ]);
    });
};
