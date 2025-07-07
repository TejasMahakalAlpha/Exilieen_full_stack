const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow frontend from Render
app.use(cors({
  origin: "https://exilieen-tejas-frontend.onrender.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📨 New contact:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mahakaltejas686@gmail.com",
        pass: "esrr qzye mcsf aznt",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "tmahakal46@gmail.com",
      subject: `Contact Form - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "✅ Message sent successfully!" });
  } catch (err) {
    console.error("❌ Mail Error:", err);
    res.status(500).json({ success: false, message: "Failed to send message", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
