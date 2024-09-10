import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { prisma } from '@/utils/prisma';

async function addToWaitlist(email) {
  const result = await prisma.waitlist.create({
    data: {
      email
    }
  });
  console.log(result);
  return result;
}

async function isInWaitlist(email) {
  const result = await prisma.waitlist.findFirst({
    where: {
      email
    }
  });

  return result == null;
}

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  console.log(session);

  if (session) {
    if (!isInWaitlist(session.user.email)) {
      addToWaitlist(session.user.email);

      res.send({
        content:
          "ADDED!",
      })
    }
    else {
      res.send({
        content:
          "ALREADY IN WAITLIST",
      })
    }
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}
