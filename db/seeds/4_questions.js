
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 501, catagory: 'Misc', question: 'When is the Ohio State game on Saturday?', travelers_id: 501, trips_id: 501},
        {id: 502, catagory: 'Hotel', question: 'Where should we stay?', travelers_id: 501, trips_id: 501},
        {id: 503, catagory: 'Restaurants', question: 'Where should we eat?', travelers_id: 501, trips_id: 502},
        {id: 504, catagory: 'Things To Do', question: 'What is the best Beach?', travelers_id: 501, trips_id: 503},
        {id: 505, catagory: 'Things To Do', question: 'Where is the best nightlife?', travelers_id: 502, trips_id: 504},
        {id: 506, catagory: 'Things To Do', question: 'Where can we Sunday Funday?', travelers_id: 502, trips_id: 504},
        {id: 507, catagory: 'Things To Do', question: 'Where are some good hikes?', travelers_id: 502, trips_id: 505},
        {id: 508, catagory: 'Restaurants', question: 'Best place for happy hour?', travelers_id: 503, trips_id: 506},
        {id: 509, catagory: 'Hotel', question: 'What is the best five star hotel close to any beach?', travelers_id: 503, trips_id: 507},
        {id: 510, catagory: 'Hotel', question: 'What hotels have a great view of the mountains?', travelers_id: 504, trips_id: 509},
        {id: 511, catagory: 'Things To Do', question: 'Best spas?', travelers_id: 504, trips_id: 510}
      ]);
    });
};
