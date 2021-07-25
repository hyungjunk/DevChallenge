import type { NextApiRequest, NextApiResponse } from "next";
import { openWeatherClient } from "../../../src/protocol/HttpClient";

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const response = await openWeatherClient.get(
    `/data/2.5/weather?q=${query.city}`,
  );
  const result = await response.data;
  res.status(200).json({ weather: result });
}
