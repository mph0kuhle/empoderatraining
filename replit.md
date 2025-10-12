# Empodera Training

## Overview
A modern, story-driven landing page for an education technology brand that delivers online short courses and executive programs in partnership with universities and industry experts. The platform is designed for young and mid-career professionals seeking flexible, recognized online learning to advance their careers.

## Project Status
- **Created**: October 12, 2025
- **Current State**: Fully functional landing page with responsive design
- **Technology Stack**: Node.js, Express, HTML5, CSS3, JavaScript
- **Repository**: https://github.com/mph0kuhle/empoderatraining

## Features
- **Hero Section**: Aspirational headline with compelling CTA buttons and hero image
- **How It Works**: Three-step process explaining the learning journey
- **Courses Section**: 6 featured courses with categories and metadata
- **Partner Logos**: Showcase of university and corporate partners
- **Testimonials**: Real learner stories with photos
- **CTA Footer**: Strong call-to-action for enrollment
- **Responsive Design**: Mobile-friendly with hamburger navigation menu

## Design System
- **Colors**: Electric blue (#0066FF), Charcoal (#1A1A1A), Soft neutrals
- **Typography**: Inter font family with bold, modern typography
- **Layout**: Clean, minimal design with plenty of white space
- **Tone**: Aspirational, intelligent, and human

## Technical Architecture
- **Server**: Express.js running on port 5000
- **Static Assets**: Served from `public/` directory
- **Images**: Stock images stored in `public/images/`
- **Deployment**: Configured for autoscale deployment

## Project Structure
```
/
├── public/
│   ├── images/          # Stock images
│   ├── index.html       # Main landing page
│   └── style.css        # Stylesheet
├── server.js            # Express server
├── package.json         # Node.js dependencies
└── replit.md           # This file
```

## Setup Instructions
1. Dependencies are already installed (Express)
2. Server runs on `npm start`
3. Access the landing page at http://localhost:5000

## Deployment
- Deployment is configured for autoscale
- Production command: `node server.js`
- Frontend serves on port 5000

## Recent Changes
- **2025-10-12**: Created complete landing page with all sections
- **2025-10-12**: Implemented responsive design with mobile navigation
- **2025-10-12**: Fixed image paths and added mobile menu functionality
- **2025-10-12**: Configured deployment settings
