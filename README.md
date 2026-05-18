# RefFinances

[![React Logo](https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg)](https://react.dev/) 
[![Vite Logo](https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg)](https://vitejs.dev/)
[![Firebase Logo](https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg)](https://firebase.google.com/)
[![Tailwind CSS Logo](https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg)](https://tailwindcss.com/)

![Maintained](https://img.shields.io/badge/maintained-yes-brightgreen)
[![Make a pull request](https://img.shields.io/badge/PRs-welcome-red.svg)](https://github.com/marcbnf/RefFinances/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

> A web application for referee finance management, built with React, Vite, and Firebase.

## Table of Contents

- [RefFinances](#reffinances)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Configure Firebase](#3-configure-firebase)
    - [4. Run the Application](#4-run-the-application)
  - [Available Commands](#available-commands)
  - [Project Structure](#project-structure)
  - [Development](#development)
    - [Development Mode](#development-mode)
    - [Code Style](#code-style)
    - [Adding Dependencies](#adding-dependencies)
  - [Building for Production](#building-for-production)
  - [Deployment](#deployment)
    - [Automated Deployment (GitHub Actions)](#automated-deployment-github-actions)
  - [Contributing](#contributing)
    - [Contribution Guidelines](#contribution-guidelines)
  - [Troubleshooting](#troubleshooting)
  - [License](#license)
  - [Support](#support)

## About

RefFinances is a web application designed to help referees manage their finances efficiently. This application provides comprehensive tools for financial tracking and management, accessible from any web browser.

**⚠️ Alpha Development Stage**: This application is currently in alpha development.

## Features

- 💰 **Comprehensive Financial Dashboard**: Real-time overview of Total Due, Total Received, and Balance.
- 📝 **Convocation Management**: Create, edit, and delete convocations with ease.
- 🔄 **Dual Expense Modes**:
  - **Au Forfait**: Automatic mileage calculation based on configurable coefficients and ceilings.
  - **Au Réel**: Detailed tracking of actual expenses (Train, Plane, Fuel, Hotel, Meals, etc.) including specific journey calculations.
- ⚙️ **Customizable Settings**:
  - Manage **Motifs** with specific indemnity rules (Km ceiling, coefficient, fixed indemnity).
  - Manage recurring **Trajets** (Journeys) with fixed distances.
- 📎 **Document Management**: Upload and store PDF receipts/documents directly with convocations (Firebase Storage).
- 🔍 **Search & Filter**: Filter by year and search by convocation number.
- 🌓 **Dark Mode**: Built-in dark/light theme toggle.
- 📱 **Responsive Design**: Optimized interface for both desktop (tables) and mobile (cards).
- 🔐 **Secure Authentication**: User management via Firebase Auth.

## Tech Stack

This project is built with the following technologies:

- **Vite** - A modern and fast frontend build tool.
- **React** v18.3.1 - A JavaScript library for building user interfaces.
- **Firebase** v10.14.1 - A platform for building web and mobile applications. Used for authentication and database (Firestore).
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **Lucide React** - Beautiful & consistent icons.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- Git

To verify your installations:

```sh
node --version
npm --version
git --version
```

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/marcbnf/RefFinances.git
cd RefFinances
```

### 2. Install Dependencies

Install all required Node.js dependencies:

```sh
npm install
```

This will install all packages defined in `package.json`, including React, Vite, and other necessary libraries.

### 3. Configure Firebase

This project uses Firebase for backend services. You'll need to create your own Firebase project and configure the application to use it.

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  In your project, create a new Web App.
3.  You will be given a Firebase configuration object. Copy this object.
4.  Create a `.env` file in the root directory of the project and add your Firebase configuration keys:

    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

5.  In the `src` directory, ensure `firebase.js` uses these environment variables:

    ```javascript
    // src/firebase.js
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import { getAuth } from "firebase/auth";
    import { getStorage } from "firebase/storage";

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    export const auth = getAuth(app);
    export const storage = getStorage(app);
    ```
6. Set up **Authentication**, **Firestore Database**, and **Storage** in your Firebase project console. For Firestore and Storage, you may need to configure security rules.

### 4. Run the Application

Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use). The server supports hot-reloading for development.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server with hot-reload. |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run deploy` | Deploys the application to GitHub Pages. |

## Project Structure

```
RefFinances/
├── src/                 # Source files
│   ├── components/      # React components
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── firebase.js      # Firebase configuration
├── public/              # Static assets
├── dist/                # Built files (auto-generated)
├── package.json         # Project configuration and dependencies
└── README.md            # This file
```

## Development

### Development Mode

Run the application with a live-reload development server:
```sh
npm run dev
```

### Code Style

Please follow the established code style in the project. Use meaningful variable names, add comments for complex logic, and keep components focused and concise.

### Adding Dependencies

To add a new dependency:

```sh
npm install <package-name>
```

For development-only dependencies:

```sh
npm install --save-dev <package-name>
```

## Building for Production

To create a production-ready build of the application:

```sh
npm run build
```

This will create a `dist/` directory with optimized and minified assets.

## Deployment

This project is configured to deploy to GitHub Pages. To deploy the application:

```sh
npm run deploy
```

This command will first build the project, then push the contents of the `dist` directory to the `gh-pages` branch on GitHub.

### Automated Deployment (GitHub Actions)

This project includes a GitHub Actions workflow to automatically build and deploy the application when changes are pushed to the `main` branch.

1.  Go to your repository **Settings** > **Secrets and variables** > **Actions**.
2.  Create the following repository secrets (using the values from your `.env` file):
    *   `VITE_FIREBASE_API_KEY`
    *   `VITE_FIREBASE_AUTH_DOMAIN`
    *   `VITE_FIREBASE_PROJECT_ID`
    *   `VITE_FIREBASE_STORAGE_BUCKET`
    *   `VITE_FIREBASE_MESSAGING_SENDER_ID`
    *   `VITE_FIREBASE_APP_ID`
3.  Push your changes to the `main` branch. The workflow will run, build the project, and deploy it to the `gh-pages` branch.

## Contributing

We welcome contributions from the community! Here's how you can help:

1.  **Fork the repository**
2.  **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

### Contribution Guidelines

-   Write clear, descriptive commit messages.
-   Follow the existing code style.
-   Test your changes thoroughly.
-   Update documentation as needed.
-   Be respectful and constructive in discussions.

## Troubleshooting

**Issue: Application won't start**
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version`
- Make sure you have a valid `src/firebase.js` configuration file.

**Issue: Build fails**
-   Clear the vite cache: `rm -rf node_modules/.vite`
-   Ensure you have write permissions in the project directory.
-   Check for error messages in the console output.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For questions, suggestions, or support:
-   Open an issue on GitHub.

---

**Made with ❤️ for the referee community**