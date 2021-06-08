import nodemailer from 'nodemailer'

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    let transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
    })

    let info = await transporter.sendMail({
      from: `"Florista Beijaflor" <${process.env.EMAIL}>`,
      to,
      subject,
      html,
    })

    console.log('Message sent: %s', info.envelope)
  } catch (error) {
    console.log('error: ', error)
  }
}
