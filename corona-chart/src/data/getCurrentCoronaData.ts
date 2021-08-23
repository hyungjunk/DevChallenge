import { xml2json } from "xml-js";

export async function getCurrentCoronaData() {
  const url =
    "/getCovid19InfStateJson/Wo5oDrq3DoodeD%2FxyAuH9kIcx5z7iQcIssa6YvEkuW6H1Ssn0e2IWdcgsIZtaynpv1pDV%2F%2FoLUQ3A45r9Yhzsw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210816&endCreateDt=20210818";
  const response = await fetch(url);
  const rawText = await response.text();
  return JSON.parse(xml2json(rawText, { compact: true, spaces: 4 }));
}
