import React, { useState, useEffect } from 'react';
import "./App.css";
import DropZone from "./DropZone";
import axios from 'axios';
import Preview from './Preview';


function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  return (
    <div className="root">
      {uploadSuccess === false? 
      <>
      <p className="title">React Drag and drop image upload</p>
      <div className="content">
        <DropZone
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setUploadSuccess={setUploadSuccess}
        />
      </div>
      </> :
      <Preview/>}

    </div>
  )
  
}
export default App;
