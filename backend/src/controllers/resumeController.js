const resumeData = require('../data/resume.json');

// Controller methods
exports.getFullResume = (req, res) => {
  res.json(resumeData);
};

exports.getEducation = (req, res) => {
  res.json(resumeData.education);
};

exports.getExperience = (req, res) => {
  res.json(resumeData.experience);
};

exports.getSkills = (req, res) => {
  res.json(resumeData.skills);
};

exports.getLeadership = (req, res) => {
  res.json(resumeData.leadership);
};

exports.getHonors = (req, res) => {
  res.json(resumeData.honors);
};