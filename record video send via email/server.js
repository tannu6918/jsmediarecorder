const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// POST /upload route to receive video and email details
app.post('/upload', upload.single('video'), async (req, res) => {
  try {
    const { name, email } = req.body;
    const videoPath = req.file.path;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '....', // e.g., your Gmail address
        pass: '.......' ,// app-specific password
      }
    });

    const mailOptions = {
      from: '..',    // from gmail
      to: '.....',       // to gmail
      subject: '🎬 New Video from ' + name,
      html: `
        <p><strong>${name}</strong> has sent you a video message.</p>
        <p>Check the attached video below.</p>
      `,
      attachments: [{
        filename: 'video.webm',
        path: videoPath
      }]
    };

    await transporter.sendMail(mailOptions);
    fs.unlinkSync(videoPath); // cleanup
    res.send('✅ Email sent with video!');
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).send('❌ Error sending email');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
