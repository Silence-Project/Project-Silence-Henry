const { conn } = require("../config/bd");


//VIEW user and their locations
async function createUserViews() {
  try {
    await conn.query(`
        CREATE OR REPLACE VIEW UserAddress AS
        SELECT "User"."id", "User"."firstName", "User"."lastName", "Location"."city", "Location"."address", "Location"."postalCode"
        FROM "Users" AS "User"
        INNER JOIN "Locations" AS "Location"
        ON "User"."id" = "Location"."idUser";
    `, { type: conn.QueryTypes.SELECT });
    console.log("userAddress view was created!");
  } catch (error) {
    console.error("Error executing raw query:", error);
  }
}

// sequelize
//   .query(
//     `
//   CREATE OR REPLACE VIEW alluserview AS
//   SELECT "User"."id", "User"."firstName", "User"."lastName", "Location".*
//   FROM "Users" AS "User"
//   LEFT JOIN "Locations" AS "Location"
//   ON "User"."id" = "Location"."idUser"
//   ORDER BY "Location"."idUser";
// `,
//     { type: sequelize.QueryTypes.SELECT }
//   )
//   .then((results) => {
//     console.log("resultados de view alluserview: ", results);
//     // return results;
//   })
//   .catch((error) => {
//     console.error("Error executing raw query:", error);
//   });

module.exports = {
  createUserViews,
};
