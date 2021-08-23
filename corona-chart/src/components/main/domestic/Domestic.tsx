import React from "react";
import Accumulated from "./Accumulated";
import TodayStatus from "./TodayStatus";
import Charts from "./Charts";
import GraphMap from "./GraphMap";
import { getCurrentCoronaData } from "../../../data/getCurrentCoronaData";

const Domestic: React.FC = (props) => {
  const data = getCurrentCoronaData();
  return (
    <>
      <Accumulated data={data} />
      <TodayStatus />
      <Charts />
      <GraphMap />
    </>
  );
};

export default Domestic;
