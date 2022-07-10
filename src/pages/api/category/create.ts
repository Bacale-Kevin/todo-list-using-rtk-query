import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function createCategory(req: NextApiRequest, res: NextApiResponse) {
  console.log('BODY --> ', req.body);
  const { name } = req.body;

  if (name === "") return;

  // @POST Categories
  if (req.method === "POST") {
    try {
      const cat = await prisma.category.create({ data: { name } });
      res.status(201).json({ message: "Category created", cat });
    } catch (error) {
      res.status(400).json({ message: `Something went wrong:/  ${error}` });
    }
  }
}
