import { prisma } from '@/utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from "resend";
import { enlistadoAGODKey } from "@/components/emails/emailAGODKey";

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

async function validateRecaptcha(recaptchaToken:string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const formData = `secret=${secret}&response=${recaptchaToken}`;

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData
  });
  
  const data = await response.json();
  console.log(data);
  return data.success;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { email, recaptchaToken } = request.body;
  
  if (await validateRecaptcha(recaptchaToken) == false) {
    return response.status(400);
  }

  if (isInWaitlist(email)) {
    //addToWaitlist(email);
    const { data, error } = await resend.emails.send({
      from: "AGOD Ecosystem <noreply@agodecosystem.com>",
      to: email,
      subject: "Desbloquea el potencial Blockchain",
      react: enlistadoAGODKey({
        username: email,
        teamName: "AGOD Key",
        invitedByUsername: "AGOD Ecosystem"
      })
    });

    if (error) {
      return response.status(400).json(error);
    }

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
