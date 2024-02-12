const express = require("express");
const tagRouter = express.Router();
const {getAllTags} = require("./tags.controllers")

tagRouter.get("/", getAllTags);
//tagRouter.post('/', )

module.exports = tagRouter;