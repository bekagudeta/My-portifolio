const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async (contactData) => {
  try {
    // Email to you (admin notification)
    const adminMailOptions = {
      from: `"Beka Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message from ${contactData.name} - Beka Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(45deg, #3B82F6, #8B5CF6); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Message</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 5px 0 0 0;">Beka Gudeta Portfolio</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0;">Message Details</h2>
              
              <div style="margin-bottom: 10px;">
                <strong style="color: #3B82F6;">👤 Name:</strong>
                <span style="color: #333; margin-left: 10px;">${contactData.name}</span>
              </div>
              
              <div style="margin-bottom: 10px;">
                <strong style="color: #3B82F6;">📧 Email:</strong>
                <span style="color: #333; margin-left: 10px;">${contactData.email}</span>
              </div>
              
              <div style="margin-bottom: 10px;">
                <strong style="color: #3B82F6;">📝 Subject:</strong>
                <span style="color: #333; margin-left: 10px;">${contactData.subject}</span>
              </div>
              
              <div style="margin-top: 20px;">
                <strong style="color: #3B82F6;">💬 Message:</strong>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3B82F6; margin-top: 10px;">
                  <p style="color: #333; margin: 0; line-height: 1.6;">${contactData.message}</p>
                </div>
              </div>
            </div>
            
            <div style="background: #e8f4ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3B82F6;">
              <p style="color: #333; margin: 0; font-size: 14px;">
                <strong>📅 Received:</strong> ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
              <p style="color: #666; margin: 10px 0 0 0; font-size: 12px;">
                This message was sent through your portfolio contact form.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0;">Beka Gudeta - Software Engineering Portfolio</p>
            <p style="margin: 5px 0 0 0;">Jimma University</p>
          </div>
        </div>
      `,
    };

    // Optional: Auto-reply to the sender
    const autoReplyOptions = {
      from: `"Beka Gudeta" <${process.env.EMAIL_USER}>`,
      to: contactData.email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(45deg, #3B82F6, #8B5CF6); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You!</h1>
          </div>
          
          <div style="padding: 30px 20px; background: #f8f9fa;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Hi <strong>${contactData.name}</strong>,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3B82F6;">
              <p style="color: #333; margin: 0 0 10px 0; font-weight: bold;">Your Message:</p>
              <p style="color: #666; margin: 0; font-style: italic;">"${contactData.message}"</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              I typically respond within 24-48 hours. If your inquiry is urgent, you can also reach me through:
            </p>
            
            <ul style="color: #333; padding-left: 20px;">
              <li>LinkedIn: <a href="https://linkedin.com/in/bekagudeta" style="color: #3B82F6;">bekagudeta</a></li>
              <li>Telegram: <a href="https://t.me/beekaaguddataa" style="color: #3B82F6;">@beekaaguddataa</a></li>
            </ul>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 20px;">
              Best regards,<br>
              <strong>Beka Gudeta</strong><br>
              Software Engineering Student<br>
              Jimma University
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px; background: #e9ecef;">
            <p style="margin: 0;">This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);
    
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};

module.exports = { sendContactEmail };