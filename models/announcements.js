const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/database");

const Announcements = sequelize.define('dbo.duyurus', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  DuyuruAdi: {
    type: DataTypes.STRING,
  },
  ResimYolu: {
    type: DataTypes.STRING,
  },
  Aciklama: {
    type: DataTypes.STRING,
  },
  KisiId: {
    type: DataTypes.TINYINT,
  },
});

module.exports = Announcements;
