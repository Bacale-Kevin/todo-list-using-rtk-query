import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function createCategory(req: NextApiRequest, res: NextApiResponse) {
  // @GET Categories
  try {
    const cat = await prisma.category.findMany({ select: { id: true, name: true } });
    res.status(200).json(cat);
  } catch (error) {
    res.status(400).json({ message: `Something went wrong:/  ${error}` });
  }
}
