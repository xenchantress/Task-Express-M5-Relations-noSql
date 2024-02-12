const express = require("express");
const getTagsWithPost  = require("./tags.controllers");
const tagRouter = express.Router;

tagRouter.get("/", getTagsWithPost);
//tagRouter.post('/', )

module.exports = tagRouter;