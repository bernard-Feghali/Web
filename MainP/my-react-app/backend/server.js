import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Debug environment variables
console.log('Server starting with config:', {
  EMAIL_HOST: process.env.EMAIL_HOST ? '****' : 'MISSING',
  PORT: process.env.PORT || 3000
});

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
    : 'https://your-production-domain.com'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure for both development and production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from React build
  app.use(express.static(path.join(__dirname, '../build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
} else {
  // Development static files (if needed)
  app.use(express.static(path.join(__dirname, 'public')));
}

// Enhanced email endpoint
app.post('/api/send-email', async (req, res) => {
  // Input validation
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format' 
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      // Only for development - remove in production or use proper certificates
      rejectUnauthorized: process.env.NODE_ENV !== 'production'
    }
  });

  const mailOptions = {
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    replyTo: req.body.email,
    subject: `New message from ${req.body.name}`,
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #3498db;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${req.body.email}">${req.body.email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 10px; border-left: 3px solid #3498db;">
          ${req.body.message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import 'dotenv/config';
// import express from 'express';
// import nodemailer from 'nodemailer';
// import path from 'path';
// import { fileURLToPath } from 'url';

// console.log(process.env.EMAIL_HOST);  // Debug: Should print your SMTP host
// // Fix __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from 'public'
// app.use(express.static(path.join(__dirname, 'public')));

// // GET route for root (serves index.html)
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // POST route for form submission
// app.post('/send-email', async (req, res) => {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//         host: process.env.EMAIL_HOST,
//         port: process.env.EMAIL_PORT,
//         secure: false,
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const mailOptions = {
//         from: `"${name}" <${process.env.EMAIL_USER}>`,   // your Gmail account
//         to: process.env.EMAIL_USER,                      // send to yourself
//         replyTo: email,                                   // user's real email address
//         subject: `New Contact Form Submission from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         html: `
//             <h3>New Contact Form Submission</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Message:</strong> ${message}</p>
//         `,
//     };
    
    

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: true, message: 'Email sent successfully!' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ success: false, message: 'Failed to send email.' });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });