const Tag = require("../../models/Tag");

const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    return res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAllTags,
};
