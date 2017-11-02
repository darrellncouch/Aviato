
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {id: 501, answer: 'Kick off is at noon', favorite: false, local_id: 502, question_id: 501},
        {id: 502, answer: 'Manhattan Beach is nice', favorite: false, local_id: 503, question_id: 504},
        {id: 503, answer: 'If you have time Havasupai is amazing', favorite: false, local_id: 501, question_id: 507},
        {id: 504, answer: 'The Scott is pretty nice', favorite: false, local_id: 501, question_id: 511}
      ]);
    });
};
