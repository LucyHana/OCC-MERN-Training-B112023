const express = require("express");
const app = express();

const mongoose = require("mongoose");

const product_router = require("./routes/product_route");
const user_router = require("./routes/user_route");
const location_router = require("./routes/location_route");

app.listen(3000, () => console.log("Ready to listen to PORT 3000"));

mongoose
  .connect(
    "mongodb+srv://hannahplaza9:EoYMmAZtiuhLhE4w@cluster0.fq7ac8c.mongodb.net/Store?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connection Successful"))
  .catch((error) => console.error(error));

app.use(express.json());

app.use("/api/products", product_router);

app.use("/api/users", user_router);

app.use("/api/locations", location_router);
