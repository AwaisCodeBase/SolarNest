const nodemailer = require('nodemailer');
const config = require('../config/config');

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
    if (error) {
        console.error('SMTP Configuration Error:', error);
    } else {
        console.log('SMTP Server is ready to send messages');
        console.log('Using email account:', config.EMAIL_USER);
        console.log('Sending to:', config.ADMIN_EMAIL);
    }
});

exports.sendContactEmail = async (req, res) => {
    try {
        console.log('Received contact form submission:', req.body);
        
        const { name, email, message, interests } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            console.log('Validation failed:', { name, email, message });
            return res.status(400).json({
                status: 'error',
                message: 'Name, email, and message are required'
            });
        }

        // Email content
        const mailOptions = {
            from: {
                name: 'Contact Form',
                address: config.EMAIL_USER
            },
            to: config.ADMIN_EMAIL,
            replyTo: email, // This allows you to reply directly to the sender
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Interests:</strong> ${interests ? interests.join(', ') : 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p><small>This email was sent from your website's contact form.</small></p>
            `
        };

        console.log('Attempting to send email to:', config.ADMIN_EMAIL);
        console.log('Email configuration:', {
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject
        });

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        console.log('Message ID:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

        res.status(200).json({
            status: 'success',
            message: 'Contact form submitted successfully'
        });
    } catch (error) {
        console.error('Error in sendContactEmail:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to send contact form',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};