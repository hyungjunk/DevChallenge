import type { NextApiRequest, NextApiResponse } from "next";
import { fetchImpl } from "../../../src/protocol/Fetcher";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req;
  const result = await fetchImpl.get(
    `https://www.metaweather.com/api/location/search/?query=${query.keyword}`,
  );
  const data = result.data.map((city: RawCity) => ({
    cityName: city.title,
    latlng: city.latt_long,
  }));
  res.status(200).json({ data: data });
}

type RawCity = {
  title: string;
  latt_long: string;
};
