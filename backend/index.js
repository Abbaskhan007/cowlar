require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routers/todoRouter");
const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running at port ${process.env.PORT || 5000}`)
);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch(err => server.close(() => console.log("Server Close " + err)));

app.use("/api/todo", todoRouter);
