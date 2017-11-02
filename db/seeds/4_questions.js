
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, catagory: 'Misc', question: 'When is the Ohio State game on Saturday?', travelers_id: 1, trips_id: 1},
        {id: 2, catagory: 'Hotel', question: 'Where should we stay?', travelers_id: 1, trips_id: 1},
        {id: 3, catagory: 'Restaurants', question: 'Where should we eat?', travelers_id: 1, trips_id: 2},
        {id: 4, catagory: 'Things To Do', question: 'What is the best Beach?', travelers_id: 1, trips_id: 3},
        {id: 5, catagory: 'Things To Do', question: 'Where is the best nightlife?', travelers_id: 2, trips_id: 4},
        {id: 6, catagory: 'Things To Do', question: 'Where can we Sunday Funday?', travelers_id: 2, trips_id: 4},
        {id: 7, catagory: 'Things To Do', question: 'Where are some good hikes?', travelers_id: 2, trips_id: 5},
        {id: 8, catagory: 'Restaurants', question: 'Best place for happy hour?', travelers_id: 3, trips_id: 6},
        {id: 9, catagory: 'Hotel', question: 'What is the best five star hotel close to any beach?', travelers_id: 3, trips_id: 7},
        {id: 10, catagory: 'Hotel', question: 'What hotels have a great view of the mountains?', travelers_id: 4, trips_id: 9},
        {id: 11, catagory: 'Things To Do', question: 'Best spas?', travelers_id: 4, trips_id: 10}
      ]);
    });
};
