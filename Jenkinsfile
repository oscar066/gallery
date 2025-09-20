pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        // Stage 1: Clone the repository....
        stage('Clone Repo') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'master', url: 'https://github.com/oscar066/gallery.git'
            }
        }

        // Stage 2: Install dependencies....
        stage('Install Dependencies') {
            steps {
                echo 'Installing NodeJS packages...'
                sh 'npm install'
            }
        }

        // Stage 3: Run the tests
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        // Stage 4: Deploy the application....
        stage('Deploy to Render') {
            steps {
                echo 'Triggering Render deployment...'
                sh 'curl "https://api.render.com/deploy/srv-d37b0mvfte5s73b4dd2g?key=TjMNCXIxEsk"'
            }
        }
    }
    post {
        failure {
            echo 'Build failed, sending email...'
            // sending an email if any of the stages fail
            mail to: 'oscar.karuga1@student.moringaschool.com',
                subject: "Build FAILED for gallery-pipeline: Build #${env.BUILD_NUMBER}",
                body: "The build failed. Check the Jenkins console for details: ${env.BUILD_URL}"
        }
        success {
            echo 'Build successful'
        }
    }
}