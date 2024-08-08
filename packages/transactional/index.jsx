import { EmailTemplate } from './packages/transactional/emails/enlistadoAGODKey.tsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['marco.munoz9@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


<button
  onClick={async function handleOnClick() {
    const results = await fetch('/api/login', {
      method: 'POST',
    });
    console.log('results', results)
  }}
>
  Send Email
</button>
