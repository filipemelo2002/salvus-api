exports.up = function (knex) {
  return knex.schema.createTable("patients", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("rg").notNullable().unique();
    table.string("cpf").notNullable().unique();
    table.string("mother_name");
    table.string("phone").notNullable();
    table.string("address").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("patients");
};
