const express = require("express");
const authorRouter = express.Router();
const { getAllAuthors, createAuthor } = require("./authors.controllers");

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor)

module.exports = authorRouter;
