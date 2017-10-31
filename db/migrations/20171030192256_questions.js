
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table)=>{
    table.increments();
    table.string('catagory');
    table.string('question');
    table.integer('travelers_id')
    .notNullable()
    .references('id')
    .inTable('travelers')
    .onDelete('CASCADE')
    .index();
    table.integer('trips_id')
    .notNullable()
    .references('id')
    .inTable('trips')
    .onDelete('CASCADE')
    .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
