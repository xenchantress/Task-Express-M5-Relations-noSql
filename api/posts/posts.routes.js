const express = require("express");

const postRouter = express.Router();
const { getAllPosts, createPost } = require("./posts.controllers");

postRouter.get("/", getAllPosts);
postRouter.post("/", createPost);


module.exports = postRouter;
