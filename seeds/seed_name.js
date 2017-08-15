
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password: 'test', email: "fake@fake.com", age: 12},
        {username: 'bob', password: 'bob', email: "fake@fake.com", age: 34},
        {username: 'susy', password: '12345', email: "fake@fake.com", age: 412},
        {username: 'robotron9000', password: 'test', email: "fake@fake.com", age: 12},
        {username: 'admin', password: 'admin', email: "admin@fake.com", age: 35},
      ]);
    });
};
