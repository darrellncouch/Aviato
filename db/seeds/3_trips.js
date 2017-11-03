
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {id: 501, name: 'Homecoming Weekend', description: 'Heading to Ohio for the weekend to spend time with some college friends!', city: 'Columbus', state: 'OH', startDate: '2017-12-07', endDate: '2017-12-10', traveler_id: 501},
        {id: 502, name: 'New Years', description: 'Renting a cabin to in the mountains for the weekend', city: 'Denver', state: 'CO', startDate: '2017-12-29', endDate: '2018-01-02', traveler_id: 501},
        {id: 503, name: 'Beach Vacation', description: 'A much needed breka from reality at the beach', city: 'San Diego', state: 'CA', startDate: '2018-05-25', endDate: '2018-05-28', traveler_id: 501},
        {id: 504, name: 'Spring Break', description: 'Senior year spring break!', city: 'San Diego', state: 'CA', startDate: '2018-03-04', endDate: '2018-03-10', traveler_id: 502},
        {id: 505, name: 'Family Weekend', description: 'Going back to Ohio to visit my cousins', city: 'Cleveland', state: 'OH', startDate: '2018-04-05', endDate: '2018-04-08', traveler_id: 502}
      ]);
    });
};
