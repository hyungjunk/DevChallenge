import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function forecast(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { lat, lng } = req.query;
  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,minutely,hourly&appid=${process.env.OPENWEATHERAPIKEY}`,
  );
  res.status(200).json({ result: result.data });
}
