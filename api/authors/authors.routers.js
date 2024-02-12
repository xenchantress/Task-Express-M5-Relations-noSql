const express = require("express");
const authorRouter = express.Router();
const { getAllAuthors, createAuthor, getAuthorsWithPosts } = require("./authors.controllers");

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor)

authorRouter.get('/', getAuthorsWithPosts);

module.exports = authorRouter;
