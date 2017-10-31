
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', (table)=>{
    table.increments();
    table.string('answer');
    table.integer('question_id')
    .notNullable()
    .references('id')
    .inTable('questions')
    .onDelete('CASCADE')
    .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('answers');
};
