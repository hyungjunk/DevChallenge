import React from "react";
import JobItem from "./JobItem";

const JobList = ({ items }) => {
  console.log(items);
  return items
    ? items.map((item) => <JobItem key={item.id} item={item} />)
    : null;
};

export default JobList;
