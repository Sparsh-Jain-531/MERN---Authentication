import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other email providers like Outlook, Yahoo, etc.
    auth: {
      user: process.env.EMAIL_USER, // Replace with your email
      pass: process.env.EMAIL_PASS, // Replace with your app password (for security, use environment variables)
    },
});

export default transporter;