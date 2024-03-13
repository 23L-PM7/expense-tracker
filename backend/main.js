const express = require("express");
const cors = require("cors");
const transactionRouter = require("./routers/transactionRouter");
const usersRouter = require("./routers/usersRouter");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionRouter);
app.use("/users", usersRouter);

const dbUsername = "erka@pinecone.mn";
const dbPassword = "12345678";

app.post("/login", (req, res) => {
  const { email, pass } = req.body;

  if (email !== dbUsername) {
    res.sendStatus(401);
    return;
  }

  if (pass !== dbPassword) {
    res.sendStatus(401);
    return;
  }

  console.log({ email, pass });

  res.json(["Success"]);
});

// app.use("/categories", categoriesRouter);
// app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
