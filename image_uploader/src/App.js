import React, { useState } from 'react';
import "./App.css";
import DropZone from "./DropZone";
// import FileInput from './FileInput';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  if (!uploadSuccess){
    return (
      <div className="root">
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
      </div>
    );
  } else {
    return (
      <p>upload done!</p>
    )
  }
  
}
export default App;
