//const Author = require('./author.model');
const Author = require("../../models/Author");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    return res.status(200).json(authors);
  } catch (error) {
    console.log("Error in getting all authors");
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).json(author);
  } catch (error) {
    console.log("Error in creating an author");
  }
};
const getAuthorsWithPosts = async (req, res) => {
  try {
    const authors = await Author.find().populate("posts");
    return res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorsWithPosts
};
