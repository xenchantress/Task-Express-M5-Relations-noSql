const express = require("express");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const authorRouter = require("./api/authors/authors.routers");
const mongoose = require('mongoose');
const tagRouter = require("./api/tags/tags.routers");

const app = express();

app.use(express.json());
app.use("/posts", postsRoutes);
app.use("/authors", authorRouter);
app.use("/tags", tagRouter);


connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
