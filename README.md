# Resume Microservice with GitHub DevOps

## Project Overview

This project implements a resume microservice using DevOps practices exclusively within GitHub's ecosystem. It provides a React-based frontend application that displays resume data fetched from static JSON files.

## Team Structure

- **Hassain Alsayhah** - Project Lead, Developer
- **Ahmed Almohammed**- CI/CD Engineer
- **Abdulmohsen Al Ali** - Operations/QA Analyst

## Architecture

![Architecture Diagram](docs/architecture-diagram.png)

The system follows a simplified architecture with the following components:

- **Frontend**: A React-based SPA that displays resume data in an interactive format
- **Static API**: JSON files served directly from GitHub Pages
- **CI/CD Pipeline**: GitHub Actions for automated testing, building, and deployment
- **Deployment**: GitHub Pages for hosting both the frontend and static API

## Technology Stack

- **Frontend**: React.js, HTML5, CSS3
- **Data Storage**: Static JSON files
- **Testing**: Jest for unit testing
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## DevOps Practices

This project implements DevOps practices including:

1. **Continuous Integration**: Automated testing on every pull request
2. **Continuous Deployment**: Automated deployment to GitHub Pages
3. **Version Control Strategy**: Feature branches with pull request reviews
4. **Automated Testing**: Unit and component tests
5. **GitHub Ecosystem**: Exclusive use of GitHub for all DevOps tasks

## Getting Started

### Prerequisites

- Node.js v18+
- GitHub account

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/resume-microservice.git
cd resume-microservice

# Install dependencies
cd frontend
npm install

# Start development server
npm start
```

### Running Tests

```bash
# Run unit tests
npm test

# Run linting
npm run lint
```

## CI/CD Pipeline

Our CI/CD pipeline consists of the following stages:

1. **Lint**: Check code quality and style
2. **Test**: Run unit tests
3. **Build**: Create production build artifacts
4. **Deploy**: Deploy to GitHub Pages

## Project Board

Track our progress on the [GitHub Project Board](https://github.com/yourusername/resume-microservice/projects/1)

## Architectural Decisions

### GitHub-Only Approach

We chose to implement this project using only GitHub services to fully embrace the assignment requirements:

- **Static JSON API**: Instead of a traditional backend server, we use static JSON files to serve resume data
- **GitHub Pages**: Used for hosting both the frontend application and the static JSON data
- **GitHub Actions**: Used for CI/CD workflows
- **GitHub Projects**: Used for project management and task tracking

This approach demonstrates how DevOps principles can be applied within a single platform (GitHub) while still maintaining a separation of concerns between data and presentation.
