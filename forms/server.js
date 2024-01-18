"use strict";

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const receivingEmailAddress = 'contact@example.com';

const transporter = nodemailer.createTransport({
    host: 'aidasagan369@gmail.com',
    port: 587,
    auth: {
        user: 'your_ethereal_username',
        pass: 'your_ethereal_password'
    }
});

app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: receivingEmailAddress,
        subject: subject,
        text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ status: 'success' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
