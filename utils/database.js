const { Sequelize } = require("@sequelize/core");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Bağlantı başarıyla kuruldu.");
  })
  .catch((err) => {
    console.error("Veritabanına bağlanılamıyor:", err);
  });

module.exports = sequelize;
