# Find People - User Search Application

A modern React-based web application for searching and finding people with detailed user profiles. This application provides an intuitive search interface with user cards displaying contact information and location details.

## Features

- Advanced Search: Search users by name
- User Cards: Clean, responsive card layout displaying user information
- User Details Modal: Detailed view of user information with contact details
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Modern UI: Clean interface with hover effects

## Tech Stack

- Frontend: React 18, React Router DOM
- Styling: CSS3 with modern flexbox and grid layouts
- Icons: SVG icons for User
- Build Tool: Create React App
- Version Control: Git with GitHub

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Local Development Setup

1. Clone the repository
   bash
   git clone https://github.com/iarpita-web/find-people.git
   cd find-people
   

2. Install dependencies
   bash
   npm install
   

3. Start the development server
   bash
   npm start
   

4. Open your browser
   Navigate to http://localhost:3000 to view the application

### Available Scripts

- npm start - Runs the app in development mode
- npm test - Launches the test runner
- npm run build - Builds the app for production
- npm run eject - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Production Build
bash
npm run build


### Deployment Options

1. Netlify
   - Connect your GitHub repository to Netlify
   - Set build command: npm run build
   - Set publish directory: build
   - Auto-deploy on push to main branch

2. Vercel
   - Import project from GitHub
   - Vercel automatically detects React app settings
   - Deploy with zero configuration

3. GitHub Pages
   bash
   npm install --save-dev gh-pages
   npm run build
   npm run deploy
   

## 🔄 Git Workflow & Branching Strategy

### Branch Structure
- main - Production-ready code
- develop - Integration branch for features
- feature/ - Feature development branches
- 

### Branching Workflow

1. Feature Development
   git checkout main
   git pull origin main
   git checkout -b feature/search-functionalinality
   # Make changes
   git add .
   git commit -m "feat: add advanced search functionality"
   git push origin feature/search-functionality
   
2. Create Pull Request
   - Open PR from feature branch to main
   - Add descriptive title and description
   - Request code review
   - Merge after approval

## 📁 Project Structure
find-people/
├── public/
│   ├── img/
│   │   └── userImg.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── SearchBox.jsx
│   │   ├── SearchBox.css
│   │   ├── UserCard.jsx
│   │   ├── UserCard.css
│   │   ├── UserD.jsx
│   │   └── UserD.css
│   ├── data/
│   │   └── users.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── SearchResults.jsx
│   │   └── SearchResults.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'feat: add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request
