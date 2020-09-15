import React from 'react'
import Masonry from 'react-masonry-css'
import './TestPage.css';

const TestPage = () => {

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div>My Element</div>
      <div>My Element</div>
      <div>My Element</div>
      <div>My Element</div>
      <div>My Element</div>
    </Masonry>
  )
}

export default TestPage
