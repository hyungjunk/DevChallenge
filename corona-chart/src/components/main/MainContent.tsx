import React from "react";
import { useRouter } from "next/router";
import Domestic from "./domestic/Domestic";
import Worlds from "./worlds/Worlds";
import { BaseRouter } from "next/dist/next-server/lib/router/router";

const Router = ({ asPath }: BaseRouter) => {
  switch (asPath) {
    case "/":
    case "/domestic":
      return <Domestic />;
    case "/worlds":
      return <Worlds />;
    case "/vaccine":
      return <Domestic />;
    case "/social-distancing":
      return <Domestic />;
    case "/faq":
      return <Domestic />;
    default:
      break;
  }
};

const MainContent: React.FC = (props) => {
  const router = useRouter();
  return (
    <div className={"mainContent"}>
      {Router(router)}
      <style jsx>{`
        .mainContent {
          display: flex;
          align-items: center;
          width: 40rem;
          height: fit-content;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default MainContent;
