export const emailTemplates = {
  // Base template wrapper
  baseTemplate: (content) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #ffffff; padding: 40px 20px;">
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="color: #8B5CF6; margin: 0; font-size: 28px;">Flowdrop</h1>
        <p style="color: #a1a1aa; font-size: 16px; margin: 10px 0;">AI-powered workflow automation</p>
      </div>
      
      ${content}
      
      <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 30px; text-align: center;">
        <p style="color: #71717a; font-size: 14px;">
          Questions? Reply to this email or reach out at <a href="mailto:webb@flowdrop.xyz" style="color: #8B5CF6;">webb@flowdrop.xyz</a>
        </p>
        <p style="color: #71717a; font-size: 12px; margin-top: 20px;">
          © 2024 Flowdrop. All rights reserved.
        </p>
      </div>
    </div>
  `,

  // Welcome email template
  welcomeEmail: () => `
    <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 30px; margin: 30px 0;">
      <h2 style="color: #8B5CF6; margin-top: 0;">You're on the list! 🎉</h2>
      <p style="color: #d4d4d8; line-height: 1.6;">
        Thanks for joining our community of forward-thinking businesses. You'll be among the first to know when we launch and get exclusive early access to our AI workflow automation platform.
      </p>
    </div>
    
    <div style="background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 25px; margin: 25px 0;">
      <h3 style="color: #8B5CF6; margin-top: 0;">What to expect:</h3>
      <ul style="color: #d4d4d8; line-height: 1.8;">
        <li>🚀 Early access to our beta launch</li>
        <li>💡 Exclusive insights on AI automation</li>
        <li>🎯 Special founding member pricing</li>
        <li>🔧 Behind-the-scenes development updates</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://flowdrop.xyz" style="background: linear-gradient(135deg, #8B5CF6, #A855F7); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
        Explore Flowdrop
      </a>
    </div>
  `,

  // Newsletter template
  newsletterEmail: (content) => `
    <div style="background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 30px; margin: 30px 0;">
      ${content.replace(/\n/g, '<br>')}
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://flowdrop.xyz" style="background: linear-gradient(135deg, #8B5CF6, #A855F7); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
        Visit Flowdrop
      </a>
    </div>
  `,

  // Contact form notification template
  contactNotification: (name, email, company, message) => `
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  `,

  // Contact confirmation template
  contactConfirmation: (name, message) => `
    <p>Hi ${name},</p>
    <p>Thanks for contacting Flowdrop. We've received your message and will get back to you within 24 hours.</p>
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p><strong>Your message:</strong></p>
      <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
    <p>In the meantime, feel free to explore our platform and see how AI-powered workflow automation can transform your business.</p>
    <p>Best regards,<br>The Flowdrop Team</p>
  `
}; 