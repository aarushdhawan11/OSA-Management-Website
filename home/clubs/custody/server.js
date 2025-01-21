const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public')); // Serve static files

// Serve your HTML file
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/home/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, roll_number, phone_no, email } = req.body;

    // Send an email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wadhwa.aadit@gmail.com', // Your email
            pass: 'kidi zhof trtd mqat'   // Your email password
        }
    });

    const mailOptions = {
        from: 'wadhwa.arin@gmail.com',
        to: email,
        subject: 'Welcome to Custody',
        text: `Hi ${name},\n\nThank you for signing up! Procedure for auditions will be shared soon. \n\nBest regards,\nTeam CUSTODY`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error sending email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Form submitted successfully! An email has been sent to you.');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
