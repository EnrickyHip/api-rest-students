"use strict";module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          name: "Enricky",
          last_name: "Hipólito",
          email: "enricky@gmail.com",
          age: 18,
          height: 1.75,
          weight: 65,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Enricky",
          last_name: "Hipólito 2",
          email: "enricky2@gmail.com",
          age: 20,
          height: 1.8,
          weight: 70.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Enricky",
          last_name: "Hipólito3",
          email: "enricky3@gmail.com",
          age: 34,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
