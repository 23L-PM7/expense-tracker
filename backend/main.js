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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
