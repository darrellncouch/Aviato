
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {id: 501, answer: 'Kick off is at noon', favorite: false, local_id: 502, question_id: 501},
        {id: 502, answer: '12 but I would get there much earlier', favorite: false, local_id: 501, question_id: 501},
        {id: 503, answer: 'The short north is great! my favorite is place Pint House', favorite: false, local_id: 501, question_id: 502},
        {id: 504, answer: 'The Fish Bowl is usuall pretty fun!', favorite: false, local_id: 503, question_id: 505}
      ]);
    });
};
