require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;

const { validateToken } = require("./middlewares/auth");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const collectionRoutes = require("./routes/collections");
const brandRoutes = require("./routes/brands");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//authorized routes
app.use("/api/users", userRoutes, validateToken);

app.use("/api/auth", authRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/brands", brandRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
