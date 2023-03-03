import Sequelize from "sequelize";

const db = new Sequelize("postgres", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
