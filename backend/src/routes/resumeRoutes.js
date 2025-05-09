const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Get all resume data
router.get('/', resumeController.getFullResume);

// Get specific sections
router.get('/education', resumeController.getEducation);
router.get('/experience', resumeController.getExperience);
router.get('/skills', resumeController.getSkills);
router.get('/leadership', resumeController.getLeadership);
router.get('/honors', resumeController.getHonors);

module.exports = router;