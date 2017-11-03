
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 501, catagory: 'Misc', question: 'When is the Ohio State game on Saturday?', travelers_id: 501, trips_id: 501},
        {id: 502, catagory: 'Restaurant', question: 'Where is a good area to get appatizers before the game?', travelers_id: 501, trips_id: 501},
        {id: 503, catagory: 'Hotel', question: 'Any suggestions on who to rent a cabin through?', travelers_id: 501, trips_id: 502},
        {id: 504, catagory: 'Things To Do', question: 'Where is the best place to ski?', travelers_id: 501, trips_id: 502},
        {id: 505, catagory: 'Things To Do', question: 'Where should we spend New Years Eve?', travelers_id: 501, trips_id: 502},
        {id: 506, catagory: 'Hotel', question: 'Boutique hotels near the beach?', travelers_id: 501, trips_id: 503},
        {id: 507, catagory: 'Hotel', question: 'Should we stay at a hotel or airbnb?', travelers_id: 502, trips_id: 504},
        {id: 508, catagory: 'Misc', question: 'What is a good area for nightlife?', travelers_id: 502, trips_id: 504},
        {id: 509, catagory: 'Restaurant', question: 'Where should I take my grandma to lunch?', travelers_id: 502, trips_id: 505}
      ]);
    });
};
