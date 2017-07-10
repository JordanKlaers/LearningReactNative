
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('champions').del()
    .then(function () {
      // Inserts seed entries
      return knex('champions').insert([
        {id: 1, Champion_Name: 'rengar'},
        {id: 2, Champion_Name: 'darius'},
        {id: 3, Champion_Name: 'sona'},
        {id: 4, Champion_Name: 'Alistar'},
        {id: 5, Champion_Name: 'Draven'},
        {id: 6, Champion_Name: 'Warwick'},
        {id: 7, Champion_Name: 'Karthus'},
        {id: 8, Champion_Name: 'Ahri'},
        {id: 9, Champion_Name: 'Lulu'},
        {id: 10, Champion_Name: 'Leona'},
        {id: 11, Champion_Name: 'Talon'},
        {id: 12, Champion_Name: 'Zed'}
      ]);
    });
};
