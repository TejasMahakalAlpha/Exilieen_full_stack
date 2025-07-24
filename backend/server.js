app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📨 New contact:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "mahakaltejas686@gmail.com",
        pass: process.env.EMAIL_PASS || "esrr qzye mcsf aznt",
      },
    });

    await transporter.sendMail({
      from: email,
      to: [
        "tmahakal46@gmail.com",     // ✅ First recipient
        "tejasmahakal740@gmail.com",
      ],
      subject: `Contact Form - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "✅ Message sent to both recipients!" });
  } catch (err) {
    console.error("❌ Mail Error:", err);
    res.status(500).json({ success: false, message: "Failed to send message", error: err.message });
  }
});
