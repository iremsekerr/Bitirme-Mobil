const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/database");

const Syllabus = sequelize.define('dbo.dersprogramis', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Gun: {
    type: DataTypes.STRING,
  },
  DersSaati: {
    type: DataTypes.STRING,
  },
  DersKod: {
    type: DataTypes.STRING,
  },
  DersAdi: {
    type: DataTypes.STRING,
  },
  OnKosul: {
    type: DataTypes.STRING,
  },
  KisiId: {
    type: DataTypes.TINYINT,
  },
});

module.exports = Syllabus;
