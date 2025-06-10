import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Feedback = db.define("Feedback", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  kegiatanId: DataTypes.INTEGER,
  nim: DataTypes.STRING,
  komentar: DataTypes.TEXT,
  rating: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

export default Feedback;
