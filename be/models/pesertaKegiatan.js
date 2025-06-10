import { DataTypes } from "sequelize";
import db from "../config/database.js";

const PesertaKegiatan = db.define("PesertaKegiatan", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nim: DataTypes.STRING,
  kegiatanId: DataTypes.INTEGER,
  peran: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default PesertaKegiatan;
