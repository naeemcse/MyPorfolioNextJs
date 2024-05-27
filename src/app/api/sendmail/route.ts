// @ts-nocheck
import { EmailTemplate } from '@/components/contact/emailhelper/email-template'
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request, res: Response) {
    try {
        const reqBody = await req.json();
        const { data, error } = await resend.emails.send({
            from: ' Portfolio <onboarding@resend.dev>',
            to: ['csenajmulislamnaeem@gmail.com'],
            subject: 'Email from Portfolio',
            react: EmailTemplate({
                name:reqBody.name, emailAddress:reqBody.email,subject:reqBody.subject,message:reqBody.message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
