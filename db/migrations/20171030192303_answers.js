
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', (table)=>{
    table.increments();
    table.string('answer');
    table.boolean('favorite')
    table.integer('local_id')
    .notNullable()
    .references('id')
    .inTable('local')
    .onDelete('CASCADE')
    .index();
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
