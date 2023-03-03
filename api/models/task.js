import db from "../utils/database.js";

const Task = db.define("task", {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: db.Sequelize.STRING,
  description: db.Sequelize.STRING,
  status: db.Sequelize.STRING,
  term: db.Sequelize.DATE,
});

export default Task;
