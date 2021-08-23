import React from "react";

interface LogoProps {}

const Logo: React.FC = (props) => {
  return (
    <div className={"logo"}>
      CORONA LIVE
      <style jsx>{`
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          background: rgb(25, 31, 44);
          border: 1px solid rgba(207, 207, 207, 0.25);
          border-radius: 0.2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Logo;
