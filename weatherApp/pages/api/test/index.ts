import type { NextApiRequest, NextApiResponse } from "next";

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  console.log("helloworld");
  console.log("--------------");
  res.status(200).json({ hello: "world" });
}
