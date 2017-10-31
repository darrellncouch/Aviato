
exports.up = function(knex, Promise) {
  return knex.schema.createTable('local', (table)=>{
    table.increments();
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('city');
    table.string('state');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('local');

};
