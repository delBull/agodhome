import { prisma } from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";
import { enlistadoAGODKey } from "../../../../../packages/transactional/emails/enlistadoAGODKey";

const resend = new Resend(process.env.RESEND_API_KEY);

async function addToWaitlist(email: string) {
  const result = await prisma.waitlist.create({
    data: {
      email
    }
  });
  console.log(result);

  return result;
}

async function isInWaitlist(email: string) {
  const result = await prisma.waitlist.findFirst({
    where: {
      email
    }
  });

  return result == null;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { email } = request.body;

  if (!isInWaitlist(email)) {
    addToWaitlist(email);
    resend.emails.send({
      from: "AGOD Ecosystem <noreply@agodecosystem.com",
      to: [email],
      subject: "Desbloquea el potencial Blockchain",
      react: enlistadoAGODKey({
        username: email,
        teamName: "AGOD Key",
        invitedByUsername: "AGOD Ecosystem"
      })
    });

    response.send({
      content:
        "ADDED!",
    });
  }
  else {
    response.send({
      content:
        "ALREADY IN WAITLIST",
    });
  }
}
