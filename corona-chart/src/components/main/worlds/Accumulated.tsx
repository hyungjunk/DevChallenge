import React from "react";

interface AccumulatedProps {}

const Accumulated: React.FC = (props) => {
  return (
    <div className={"accumulated"}>
      <div className="item">
        <div>확진자</div>
        <div>1000</div>
      </div>
      <div className="item">
        <div>사망자</div>
        <div>1000</div>
      </div>
      <div className="item">
        <div>완치자</div>
        <div>1000</div>
      </div>
      <div className="item">
        <div>검사자</div>
        <div>1000</div>
      </div>
      <style jsx>
        {`
          .accumulated {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            background: rgb(25, 31, 44);
            border: 1px solid rgba(207, 207, 207, 0.25);
            box-shadow: rgb(0 0 0 / 2%) -1px 1px 1px;
            z-index: -1;
            padding: 1rem;
            border-radius: 1rem;
            margin-bottom: 1rem;
          }
          .item {
            color: rgb(183, 193, 204);
          }
        `}
      </style>
    </div>
  );
};
export default Accumulated;
