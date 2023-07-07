const { DataTypes } = require("@sequelize/core");
const sequelize = require("../utils/database");

const Users = sequelize.define("dbo.kisis", {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  TcKimlikNo: {
    type: DataTypes.BIGINT,
  },
  Unvan: {
    type: DataTypes.STRING,
  },
  Adi: {
    type: DataTypes.STRING,
  },
  Soyadi: {
    type: DataTypes.STRING,
  },
  KullaniciId: {
    type: DataTypes.TINYINT,
  },
  ResimYolu: {
    type: DataTypes.STRING,
  },
  ResimUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Users;
