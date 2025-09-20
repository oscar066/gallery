pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        // Stage 1: Clone the repository
        stage('Clone Repo') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'master', url: 'https://github.com/oscar066/gallery.git'
            }
        }

        // Stage 2: Install dependencies
        stage('Install Dependencies') {
            steps {
                echo 'Installing NodeJS packages...'
                sh 'npm install'
            }
        }

        // Stage 3: Deploy the application
        stage('Deploy to Render') {
            steps {
                echo 'Triggering Render deployment...'
                sh 'curl "https://api.render.com/deploy/srv-d37b0mvfte5s73b4dd2g?key=TjMNCXIxEsk"'
            }
        }
    }
}