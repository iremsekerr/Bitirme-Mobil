const Users = require("../models/users.js");
const Syllabus = require("../models/syllabus.js");
const Announcements = require("../models/announcements.js");
const OfficeClock = require("../models/officeClock.js");

const GetUsers = async (req, res) => {
  try {
    let userNewData = [];
    const users = await Users.findAll();

    for (let user of users) {
      const announcements = await Announcements.findAll({
        where: { KisiId: user.Id },
      });
      const officeClocks = await OfficeClock.findAll({
        where: { KisiId: user.Id },
      });
      const syllabus = await Syllabus.findAll({ where: { KisiId: user.Id } });
      userNewData.push({
        id: user.Id,
        user: user,
        announcements: announcements,
        officeClocks: officeClocks,
        syllabus: syllabus,
      });
    }
    res.status(200).json(userNewData);
  } catch (e) {
    res.status(500).json({ message: "Bir hata oluştu", error: e });
    console.log(e);
  }
};

module.exports = {
  GetUsers,
};
