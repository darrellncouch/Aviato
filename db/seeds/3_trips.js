
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {id: 1, name: 'Girls Weekend', description: 'Heading to Ohio for the weekend to spend time with some friends', city: 'Columbus', state: 'OH', traveler_id: 1},
        {id: 2, name: 'New Years', description: 'Heading to Denver to stay in a cabin for New Years', city: 'Denver', state: 'CO', traveler_id: 1},
        {id: 3, name: 'Beach Weekend', description: 'Ready for a break from reality with some girlfriends. Spending time at the beach', city: 'San Diego', state: 'CA', traveler_id: 1},
        {id: 4, name: 'Spring Break', description: 'Senior year spring break. Ready to have some fun', city: 'San Diego', state: 'CA', traveler_id: 2},
        {id: 5, name: 'Explore', description: 'Going to the desert to explore. Ready to do some hiking and outdoor things', city: 'Phoenix', state: 'AZ', traveler_id: 2},
        {id: 6, name: 'Work', description: 'Heading to Denver for a rectuiting  event at Galvanize', city: 'Denver', state: 'CO', traveler_id: 3},
        {id: 7, name: 'Relaxing Weekend', description: 'A much needed weekend at the beach', city: 'San Diego', state: 'CA', traveler_id: 3},
        {id: 8, name: 'Visitng Family', description: 'Heading to Ohio to visit family and friends', city: 'Columbus', state: 'OH', traveler_id: 4},
        {id: 9, name: 'Tagging Along', description: 'Tagging along to my husbands work trip', city: 'Denver', state: 'CO', traveler_id: 4},
        {id: 10, name: 'Solo Trip', description: 'Staying in Phoenix looking for some spa days', city: 'Phoenix', state: 'AZ', traveler_id: 4}
      ]);
    });
};
