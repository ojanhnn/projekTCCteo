import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Pendaftaran = db.define("Pendaftaran", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  kegiatanId: DataTypes.INTEGER,
  nim: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Pendaftaran;
