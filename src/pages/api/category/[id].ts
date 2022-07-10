import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function createCategory(req: NextApiRequest, res: NextApiResponse) {
  // @GET By ID Categories
  if (req.method === "GET") {
    try {
      const cat = await prisma.category.findUnique({
        where: {
          id: req.query.id,
        },
        select: {
          id: true,
          name: true,
        },
      });
      res.status(200).json(cat);
    } catch (error) {
      res.status(400).json({ message: `Something went wrong:/  ${error}` });
    }
  }

  // @UPDATE Categories
  if (req.method === "PUT") {
    try {
      const cat = await prisma.category.update({
        where: {
          id: req.query.id,
        },
        data: {
          name: req.body.name,
        },
      });
      res.status(200).json(cat);
    } catch (error) {
      res.status(400).json({ message: `Something went wrong:/  ${error}` });
    }
  }

  // @DELETE Categories
  if (req.method === "DELETE") {
    try {
      await prisma.category.delete({
        where: {
          id: req.query.id,
        },
      });
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: `Something went wrong:/  ${error}` });
    }
  }
}
