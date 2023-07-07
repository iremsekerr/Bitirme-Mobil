const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/database");

const OfficeClock = sequelize.define("dbo.ofissaatis", {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  MusaitlikDurumu: {
    type: DataTypes.TINYINT,
  },
  OfisSaatiGun: {
    type: DataTypes.STRING,
  },
  OfisSaatiBaslangic: {
    type: DataTypes.STRING,
  },
  OfisSaatiBitis: {
    type: DataTypes.STRING,
  },
  KisiId: {
    type: DataTypes.TINYINT,
  },
});

module.exports = OfficeClock;
