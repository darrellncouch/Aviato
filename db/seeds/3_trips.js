
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {id: 501, name: 'Girls Weekend', description: 'Heading to Ohio for the weekend to spend time with some friends', city: 'Columbus', state: 'OH', traveler_id: 501},
        {id: 502, name: 'New Years', description: 'Heading to Denver to stay in a cabin for New Years', city: 'Denver', state: 'CO', traveler_id: 501},
        {id: 503, name: 'Beach Weekend', description: 'Ready for a break from reality with some girlfriends. Spending time at the beach', city: 'San Diego', state: 'CA', traveler_id: 501},
        {id: 504, name: 'Spring Break', description: 'Senior year spring break. Ready to have some fun', city: 'San Diego', state: 'CA', traveler_id: 502},
        {id: 505, name: 'Explore', description: 'Going to the desert to explore. Ready to do some hiking and outdoor things', city: 'Phoenix', state: 'AZ', traveler_id: 502},
        {id: 506, name: 'Work', description: 'Heading to Denver for a rectuiting  event at Galvanize', city: 'Denver', state: 'CO', traveler_id: 503},
        {id: 507, name: 'Relaxing Weekend', description: 'A much needed weekend at the beach', city: 'San Diego', state: 'CA', traveler_id: 503},
        {id: 508, name: 'Visitng Family', description: 'Heading to Ohio to visit family and friends', city: 'Columbus', state: 'OH', traveler_id: 504},
        {id: 509, name: 'Tagging Along', description: 'Tagging along to my husbands work trip', city: 'Denver', state: 'CO', traveler_id: 504},
        {id: 510, name: 'Solo Trip', description: 'Staying in Phoenix looking for some spa days', city: 'Phoenix', state: 'AZ', traveler_id: 504}
      ]);
    });
};
