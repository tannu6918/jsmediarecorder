# JS Media Recorder & Email Sender
This project allows users to record a video using their browser, upload it to the server, and automatically send it via email using Node.js, Express, and Nodemailer.

# Project Structure

├── node_modules  

├── public/            # Frontend files (HTML/JS/CSS) 

├── uploads/           # Temporary upload storage 

├── server.js          # Main server code

├── package.json

└── .env               # Environment variables

# Features

Record video directly from browser

Upload video to server

Send the recorded video as an email attachment

Automatic file cleanup after sending



# Technologies Used
Frontend: HTML5, JavaScript </br>

Backend: Node.js, Express.js

File Uploads: Multer

Email Service: Nodemailer

Templating: HTML5 + Vanilla JS


# Setup Instructions

##  1 Clone the repo

https://github.com/tannu6918/jsmediarecorder.git

cd jsmediarecorder

## 2 Install dependencies

npm install

## 3 Setup .env file

### Create a .env file and add your email credentials:

EMAIL_USER=your-email@gmail.com

EMAIL_PASS=your-app-password

 ##  4 Run the server

 node server.js

 ## 5 Open the app
 
Visit: http://localhost:3000


#  Email Sending

When a video is uploaded, it is sent as an email attachment and then deleted from the server to save space.

# 📸 Frontend UI

Uses the browser's MediaRecorder API.

Records and sends video with a single click.

 # 📌 TODO / Improvements
Add file size validation

Support multiple recipients

Add email subject/body customization

Add success/failure frontend alert messages

 # 🤝 Contributing
 
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!
