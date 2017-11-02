
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {id: 1, answer: 'Kick off is at noon', favorite: false, local_id: 2, question_id: 1},
        {id: 2, answer: 'Manhattan Beach is nice', favorite: false, local_id: 3, question_id: 4},
        {id: 3, answer: 'If you have time Havasupai is amazing', favorite: false, local_id: 1, question_id: 7},
        {id: 4, answer: 'The Scott is pretty nice', favorite: false, local_id: 1, question_id: 11}
      ]);
    });
};
