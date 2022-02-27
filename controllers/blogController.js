const Blog = require("../models/blogModel");
const insertData = async (req, res) => {
  await Blog.create(req.body);
  //   console.log(req.body);
  res.send("Blog Added Successfully");
};

const getAllData = async (req, res) => {
  const data = await Blog.find({});
  res.json(data);
};

const deleteData = async (req, res) => {
  const blogId = req.params.id;
  await Blog.findByIdAndDelete(blogId);
  res.json({ message: "Data Deleted" });
};
const updateData = async (req, res) => {
  const blogId = req.params.id;
  const updateBlogs = await Blog.findOneAndUpdate(blogId, req.body, {
    new: true,
  });
  res.send(updateBlogs);
};

module.exports = { insertData, getAllData, deleteData, updateData };
