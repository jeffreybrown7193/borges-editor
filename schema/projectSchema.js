const mongoose = require('mongoose');

const WritingProjectsSchema = new mongoose.Schema({
  projectUser: String,
  name: String,
  type: String,
  description: String
},
{
  collection: "writingProjects"
});

const WritingProject = new mongoose.model("WritingProject", WritingProjectsSchema);

module.exports = WritingProject;
