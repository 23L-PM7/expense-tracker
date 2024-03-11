const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  if (req.query.loginInfo !== "erka@pinecone.mn:12345678") {
    res.sendStatus(401);
    return;
  }

  const result = await sql`select * from transactions`;
  res.json(result);
});

router.post("/", async (req, res) => {
  const { title, description = "" } = req.body;
  // if (description === undefined) {
  //   description = "";
  // }
  await sql`insert into transactions(id, title, description) values(${uuidv4()}, ${title}, ${description})`;
  res.json([{ status: "Success" }]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  await sql`update transactions set title = ${title} where id = ${id}`;
  res.sendStatus(204);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await sql`delete from transactions where id = ${id}`;
  res.sendStatus(204);
});

module.exports = router;
