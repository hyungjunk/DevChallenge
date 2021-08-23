import React, { useEffect, useRef, useState } from "react";

interface TestProps {}

const Test: React.FC = (props) => {
  return (
    <div>
      Lazy Image loader test
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  );
};

const Image = ({ src }) => {
  console.log("i am referred");
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [load, setLoad] = useState(false);

  function onIntersection(
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setLoad(true);
      }
    });
  }

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onIntersection);
    }
    imgRef.current && observerRef.current?.observe(imgRef.current);
  });

  // return <img ref={imgRef} src={load ? src : "loading"} />;
  return 1;
};

export default Test;
