import React from "react";

interface TodayStatusProps {}

const TodayStatus: React.FC = (props) => {
  return (
    <div className={"today-wrapper"}>
      <div className="upper">
        <div className="item">
          <div className="label">오늘 확진자수</div>
          <div className="label">1000명</div>
        </div>
        <div className="item">
          <div className="label">vs 어제</div>
          <div className="label">vs 1주전</div>
        </div>
        <div className="item">
          <div className="label">vs 2주전</div>
          <div className="label">vs 1달전</div>
        </div>
      </div>
      <div className="lower">
        <div>1시간전</div>
        <div className={"current-status"}>서울강남구 추가확진</div>
        <div> &gt; </div>
      </div>
      <style jsx>
        {`
          .today-wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-around;
            width: 100%;
            background: rgb(25, 31, 44);
            border: 1px solid rgba(207, 207, 207, 0.25);
            box-shadow: rgb(0 0 0 / 2%) -1px 1px 1px;
            z-index: -1;
            border-radius: 1rem;
            margin-bottom: 1rem;
          }
          .upper {
            width: 100%;
            position: relative;
            top: 0;
            display: flex;
            border-radius: 1rem;
            padding: 1rem;
            justify-content: space-around;
            border: 1px solid rgba(207, 207, 207, 0.25);
          }
          .item {
            color: rgb(183, 193, 204);
          }
          .lower {
            display: flex;
            justify-content: space-around;
            text-align: center;
            padding: 0.5rem;
          }
          .lower > div {
            flex-grow: 1;
          }
          .current-status {
            flex-grow: 3;
          }
        `}
      </style>
    </div>
  );
};

export default TodayStatus;
