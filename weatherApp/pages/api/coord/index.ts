import type { NextApiRequest, NextApiResponse } from "next";
import { googleClient } from "../../../src/protocol/HttpClient";

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const response = await googleClient.get(`?latlng=${query.latlng}`);
  const responseJson = await response.data;
  res.status(200).json({
    cityName: responseJson.results[0].address_components[3].long_name,
  });
}
