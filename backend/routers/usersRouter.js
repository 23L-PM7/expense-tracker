const express = require("express");
const { sql } = require("../config/database");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.password === password) {
    res.json(user[0]);
  } else {
    res.status(500).json({ message: "tani ner nuuts ug buruu baina" });
  }
});

module.exports = router;
