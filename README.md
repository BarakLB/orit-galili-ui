# Orit Galili - Architecture and Interior Design Website

Welcome to the Architecture and Interior Design Website project! This is an Angular-based web application designed to showcase architectural and interior design projects with a clean and modern interface.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [Folder Structure](#folder-structure)

## Introduction

This project is aimed at providing a visually appealing and user-friendly platform for architects and interior designers to showcase their work. The website features a responsive design, project galleries, detailed project views, and contact information.

## Features

- Responsive design for optimal viewing on all devices
- Project galleries with image sliders
- Detailed project pages with descriptions and image galleries
- Contact form for client inquiries
- Smooth scrolling and animated transitions

## Tech Stack

- **Framework**: Angular
- **Styling**: SCSS, CSS3
- **Build Tool**: Angular CLI
- **Deployment**: [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or any static site hosting

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Angular CLI](https://angular.io/cli) (version 11.x or later)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/architecture-interior-design-website.git
   cd architecture-interior-design-website

   ```

2. **Install dependencies:**

   ```sh
   npm install

   ```

### Running the Application

1. **Start the development server:**

   ```sh
   ng serve

   ```

2. **Open your browser and navigate to:**

   ```sh
   http://localhost:4200
   ```

## Contributing

1. **Fork the repository.**

2. **Create a new branch:**

   ```sh
   git checkout -b feature/your-feature-name

   ```

3. **Make your changes and commit them:**

   ```sh
   git commit -m "Add new feature"

   ```

4. **Push to the branch:**

   ```sh
   git push origin feature/your-feature-name

   ```

5. **Create a pull request.**

## Folder Structure

    ```sh
    architecture-interior-design-website/
    ├── e2e/                     # End-to-end tests
    ├── src/                     # Source files
    │   ├── app/                 # Angular components, services, modules
    │   ├── assets/              # Images, fonts, and other assets
    │   ├── environments/        # Environment settings
    │   ├── styles/              # Global styles
    │   ├── index.html           # Main HTML file
    │   ├── main.ts              # Main entry point
    │   ├── polyfills.ts         # Polyfills for older browsers
    │   └── styles.scss          # Global SCSS file
    ├── .editorconfig            # Editor configuration
    ├── .gitignore               # Git ignore file
    ├── angular.json             # Angular CLI configuration
    ├── package.json             # NPM dependencies and scripts
    ├── README.md                # Project README file
    ├── tsconfig.app.json        # TypeScript configuration
    ├── tsconfig.json            # TypeScript configuration
    └── tslint.json              # TSLint configuration
