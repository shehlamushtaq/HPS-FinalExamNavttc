const express = require("express");
const router = express.Router();
const Admin = require("../../models/admin.js");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // res.json({
  //   st: 1,
  //   msg: "logged in successfully",
  //   user: { name: "Administrator", username: "admin" },
  // });
  try {
    Admin.findOne({ username })
      .then((admin) => {
        if (password === admin.password) {
          res.json({ st: 1, msg: "logged in successfully", user: admin });
        } else {
          res.json({ st: 0, msg: "incorrect password" });
        }
      })
      .catch((err) => res.json({ st: 0, msg: "user not found" }));
  } catch (err) {
    console.log(err);
  }
});

// router.post("/create", (req, res) => {
//   try {
//     const admin = new Admin({
//       name: "Administrator",
//       username: "admin",
//       password: "admin",
//     });
//     admin.save();
//     res.json({ msg: "admin created successfully" });
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
