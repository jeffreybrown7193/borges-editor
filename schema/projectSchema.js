const mongoose = require('mongoose');

const writingProjectsSchema = new mongoose.Schema({
  projectUser: String,
  name: String,
  type: String,
  description: String
});

const writingProject = new mongoose.model("writingProject",writingProjectsSchema);

exports.writingProject = writingProject;
