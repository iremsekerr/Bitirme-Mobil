const express = require("express");
const router = express.Router();

const { GetUsers } = require("../controllers/getFunctions.js");

router.get("/api", (req, res, next) => {
  res.status(404).json({ error: "Sayfa Bulunamadı" });
});

router.get("/public", (req, res, next) => {
  res.status(200).json({ message: "Public kaynağı" });
});

router.get("/api/getUsers", GetUsers); 

router.use("/", (req, res, next) => {
  res.status(200).json({ message: "Başarılı bağlantı" });
});

module.exports = router;
