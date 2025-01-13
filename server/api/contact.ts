import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const {
        firstName,
        lastName,
        company,
        email,
        phone,
        message,
    } = await readBody(event)

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {data, error} = await resend.emails.send({
        from: 'no-reply@vanzanten.dev',
        to: 'swen@vanzanten.dev',
        subject: 'Contact form website',
        html: `<p>First name: ${firstName}</p>
           <p>Last name: ${lastName}</p>
           <p>Company: ${company}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    });

    return {
        data: data,
        error: error,
    }
})
