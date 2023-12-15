const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

//import the routes
const book_router = require("./routes/book_route");
const user_router = require("./routes/user_route");

app.listen(3000, () => console.log("Ready to listen to PORT 3000"));

mongoose
  .connect(
    "mongodb+srv://hannahplaza9:EoYMmAZtiuhLhE4w@cluster0.fq7ac8c.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connection Successful"))
  .catch((error) => console.error(error));

app.use(cors({ origin: "*" }));

//middleware converts JSON to JS Object
app.use(express.json());

//middleware define root path
app.use("/api/books", book_router);

//middleware rooth path user
app.use("/api/users", user_router);
