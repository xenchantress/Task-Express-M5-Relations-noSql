const express = require("express");
const tagController = require('../tags/tags.controllers');
const tagRouter = require()

tagRouter.get('/', tagController.getTagsWithPost);

module.exports = tagRouter;