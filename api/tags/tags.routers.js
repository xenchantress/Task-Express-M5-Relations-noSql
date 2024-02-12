const express = require("express");
const tagController = require('../tags/tags.controllers');

tagRouter.get('/', tagsController.getTagsWithPost);

module.exports = tagRouter;