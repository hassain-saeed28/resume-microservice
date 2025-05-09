// File: frontend/src/services/ApiService.js
const API_BASE_URL = process.env.PUBLIC_URL || '';

class ApiService {
  // Get full resume data
  static async getFullResume() {
    try {
      const response = await fetch(`${API_BASE_URL}/data/resume.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching full resume:', error);
      throw error;
    }
  }

  // Get education data
  static async getEducation() {
    try {
      const response = await fetch(`${API_BASE_URL}/data/education.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching education data:', error);
      throw error;
    }
  }

  // Get experience data
  static async getExperience() {
    try {
      const response = await fetch(`${API_BASE_URL}/data/experience.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching experience data:', error);
      throw error;
    }
  }

  // Get skills data
  static async getSkills() {
    try {
      const response = await fetch(`${API_BASE_URL}/data/skills.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching skills data:', error);
      throw error;
    }
  }

  // Get leadership data
  static async getLeadership() {
    try {
      const response = await fetch(`${API_BASE_URL}/data/leadership.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching leadership data:', error);
      throw error;
    }
  }
}

export default ApiService;