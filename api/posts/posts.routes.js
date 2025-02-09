const express = require("express");
const postRouter = express.Router();
const { getAllPosts, createPost, addTag } = require("./posts.controllers");

postRouter.get("/", getAllPosts);
postRouter.post("/", addTag);
postRouter.post("/", createPost);



module.exports = postRouter;
