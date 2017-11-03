
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', (table)=>{
    table.increments();
    table.string('name');
    table.string('description');
    table.string('city');
    table.string('state');
    table.date('startDate');
    table.date('endDate');
    table.integer('traveler_id')
    .notNullable()
    .references('id')
    .inTable('travelers')
    .onDelete('CASCADE')
    .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('trips');
};
