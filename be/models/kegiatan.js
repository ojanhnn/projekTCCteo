import { DataTypes } from "sequelize";
import db from "../config/database.js";
import Organisasi from "./organisasi.js";

const Kegiatan = db.define("Kegiatan", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nama: DataTypes.STRING,
  deskripsi: DataTypes.TEXT,
  tanggal_mulai: DataTypes.DATE,
  tanggal_selesai: DataTypes.DATE,
  tempat: DataTypes.STRING,
}, {
    freezeTableName: true
});

Organisasi.hasMany(Kegiatan, { foreignKey: "organisasi_nama" });
Kegiatan.belongsTo(Organisasi, { foreignKey: "organisasi_nama" });

export default Kegiatan;
