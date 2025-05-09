const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class ApiService {
  // Get full resume data
  static async getFullResume() {
    try {
      const response = await fetch(`${API_BASE_URL}/resume`);
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
      const response = await fetch(`${API_BASE_URL}/resume/education`);
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
      const response = await fetch(`${API_BASE_URL}/resume/experience`);
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
      const response = await fetch(`${API_BASE_URL}/resume/skills`);
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
      const response = await fetch(`${API_BASE_URL}/resume/leadership`);
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