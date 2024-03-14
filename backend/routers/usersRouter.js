const express = require("express");
const { sql } = require("../config/database");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // 1. check if username exist
  const users = await sql`SELECT * FROM users WHERE username=${username}`;
  if (users.length === 0) {
    res.status(400).json({ message: "Username or password is not correct" });
    return;
  }

  // 2. password check
  const user = users[0];
  if (!bcrypt.compareSync(password, user.password)) {
    res.status(400).json({ message: "Username or password is not correct" });
    return;
  }

  // 3. success response
  res.status(200).json({ message: "Login Success" });
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // 1. check duplicate username
  const users = await sql`SELECT * FROM users WHERE username=${username}`;
  if (users.length > 0) {
    res.status(400).json({ message: "Already registered." });
    return;
  }

  // 2. password validation
  if (password.length < 8) {
    res.status(400).json({ message: "Password must be at least 8 characters" });
    return;
  }

  // 3. register user
  const hash = bcrypt.hashSync(password, 8);
  await sql`insert into users(id, username, password) values(${uuidv4()}, ${username}, ${hash})`;

  // 4. success response
  res.status(200).json({ message: "Successfully registered" });
});

module.exports = router;
