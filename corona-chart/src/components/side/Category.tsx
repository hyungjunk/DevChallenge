import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Category: React.FC = (props) => {
  const router = useRouter();
  const ulRef = useRef<HTMLUListElement>(null);
  const onClick = function (e: React.SyntheticEvent<HTMLLIElement>) {
    const target = e.target as HTMLLIElement;
    // e.target.classList.add("active");
    console.log("click");
  };

  useEffect(() => {
    console.log(router.pathname);
  }, []);

  return (
    <ul className={"category"} ref={ulRef}>
      <Link href={"/"}>
        <li className={"category-item active"}>
          <a>국내</a>
        </li>
      </Link>
      <Link href={"/worlds"}>
        <li className={"category-item"}>
          <a>세계</a>
        </li>
      </Link>
      <Link href={"/vaccine"}>
        <li className={"category-item"} onClick={onClick}>
          백신
        </li>
      </Link>
      <Link href={"/social-distancing"}>
        <li className={"category-item"} onClick={onClick}>
          거리두기
        </li>
      </Link>
      <Link href={"/faq"}>
        <li className={"category-item"} onClick={onClick}>
          FAQ
        </li>
      </Link>
      <style jsx>{`
        .category {
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          list-style: none;
          background: rgb(25, 31, 44);
          border: 1px solid rgba(207, 207, 207, 0.25);
          box-shadow: rgb(0 0 0 / 2%) -1px 1px 6px;
          border-radius: 12px;
          width: 100%;
          margin-bottom: 1.5rem;
          overflow: hidden;
          cursor: pointer;
        }
        .category-item {
          width: 100%;
          padding: 1rem;
        }
        .category-item.active {
          background: rgba(39, 43, 56, 0.565);
          border-left: 3px solid rgb(207, 207, 207);
        }
      `}</style>
    </ul>
  );
};

export default Category;
