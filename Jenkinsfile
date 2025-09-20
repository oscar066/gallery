pipeline {
    agent any

    // Use the NodeJS tool configured in Jenkins
    tools {
        nodejs 'node18'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing NodeJS packages...'
                sh 'npm install'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Triggering Render deployment...'
                // This command triggers your Render service to redeploy
                sh 'curl "https://api.render.com/deploy/srv-d37b0mvfte5s73b4dd2g?key=TjMNCXIxEsk"'
            }
        }
    }
}