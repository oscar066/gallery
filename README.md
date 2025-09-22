# Darkroom Image Gallery CI/CD Project

This project is a web-based image gallery application built with Node.js and Express. The primary goal of this project was to implement a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins. The pipeline automates the process of testing, building, and deploying the application to a cloud hosting service.

**Live Application URL:** [https://gallery-zq8d.onrender.com](https://gallery-zq8d.onrender.com)

---

## Features

-   Image uploading functionality.
-   A gallery view to display all uploaded images.
-   A cloud-based MongoDB Atlas database for storing image information.
-   A fully automated CI/CD pipeline.

---

## Technology Stack

-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose ODM, hosted on MongoDB Atlas
-   **Frontend:** EJS (Embedded JavaScript templates)
-   **CI/CD:** Jenkins
-   **Deployment:** Render
-   **Notifications:** Slack, Email

---

## Local Development Setup

To run this project on your local machine, follow these steps:

### Prerequisites

-   Node.js and npm installed.
-   Git installed.
-   A free MongoDB Atlas account.

### Installation and Configuration

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/oscar066/gallery.git
    cd gallery
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the database:**
    -   Create a new cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    -   Create a new database user with a secure username and password.
    -   In the `_config.js` file, replace `<USERNAME>` and `<PASSWORD>` in the MongoDB connection strings with your new credentials.

4.  **Run the application:**
    The application requires the `NODE_ENV` environment variable to select the correct database.

    ```bash
    # Run in development mode
    NODE_ENV=development npm start
    ```
    The server will be available at `http://localhost:5000`.

5.  **Run tests:**
    To execute the automated tests, run:
    ```bash
    npm test
    ```

---

## CI/CD Pipeline Overview

This project is configured with a `Jenkinsfile` that defines an automated pipeline.

-   **Trigger:** The pipeline is automatically triggered by a `git push` to the `master` branch.

-   **Stages:**
    1.  **Clone Repo:** Checks out the latest code from the GitHub repository.
    2.  **Install Dependencies:** Runs `npm install` to set up the project.
    3.  **Test:** Executes the test suite with `npm test`. If any tests fail, the pipeline stops.
    4.  **Deploy to Render:** If all tests pass, it triggers a new deployment on Render using a deploy hook.

-   **Notifications:**
    -   **On Failure:** If any stage fails, an email notification is sent to a designated address.
    -   **On Success:** Upon successful deployment, a notification is sent to a dedicated Slack channel, including the build number and a link to the live website.