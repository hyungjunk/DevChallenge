import React, { Suspense } from "react";
import dynamic from "next/dynamic";

interface GraphMapProps {}

const DC = dynamic(() => import("../../DynamicTwo"));

const GraphMap: React.FC = (props) => {
  return (
    <div>
      그래프들
      <input
        type="text"
        onChange={async (e) => {
          const fuse = (await import("../../Test")).default;
          console.log(fuse);
        }}
      />
      <DC />
    </div>
  );
};

export default GraphMap;
