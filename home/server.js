const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('home')); // Serve static files

// MongoDB connection
const uri = 'mongodb+srv://admin:admin@cluster0.a9bdt.mongodb.net/osa-data?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your actual MongoDB Atlas connection string

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// Create a Mongoose schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    roll_number: String,
    phone_no: String,
    email: String
});

const User = mongoose.model('User', UserSchema);

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, roll_number, phone_no, email } = req.body;

    // Save form data to MongoDB
    const newUser = new User({
        name,
        roll_number,
        phone_no,
        email
    });

    newUser.save()
        .then(() => {
            // Send an email using Nodemailer
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'osa.chitkara@gmail.com', // Your email
                    pass: 'uixy zxyj gybd zist'   // Your email password
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
        })
        .catch(err => {
            console.log('Error saving to database:', err); // Log the full error
            res.status(500).send('Error saving data.'); // Send a proper status code and message
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
