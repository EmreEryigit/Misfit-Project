const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const pageRoute = require("./routes/pageRoute");

// app.use
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//mongo connect
mongoose
  .connect("mongodb://localhost:27017/misfit", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
});

app.use("/", pageRoute)

// server
const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });