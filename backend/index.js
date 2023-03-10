const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routers/todoRouter");
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb+srv://Abbas:Abikhan@cluster0.zxuwnhg.mongodb.net/test", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to mongodb"));


app.use("/api/todo", todoRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
