import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const data = await prisma.product.findUnique({
    where: { id: req.query.id as string },
  });

  return res.send(data);
}
