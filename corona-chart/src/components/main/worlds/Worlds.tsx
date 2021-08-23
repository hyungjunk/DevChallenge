import Accumulated from "../worlds/Accumulated";
import TodayStatus from "../worlds/TodayStatus";
import Charts from "../worlds/Charts";
import GraphMap from "../worlds/GraphMap";

const Worlds: React.FC = (props) => {
  return (
    <>
      <Accumulated />
      <TodayStatus />
      <Charts />
      <GraphMap />
    </>
  );
};

export default Worlds;
