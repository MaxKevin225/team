// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "utils/mongodb";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { db } = await connectToDatabase();

  try {
    const exist = await db.collection("unsubscribe").findOne({ email });

    if (exist) {
      res.status(200).json({ message: "already exist" });
    } else {
      await db.collection("unsubscribe").insertOne({ email });
      res.status(200).json({ message: "unsubscribed" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
