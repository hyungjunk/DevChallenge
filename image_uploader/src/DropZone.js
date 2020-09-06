import React, { useState, useRef } from 'react';
import Im from './image.svg';
import { Button } from '@material-ui/core';
import { SimpleDialog } from './SimpleDialog';
import axios, { post } from 'axios';

const DropZone = ({ selectedFiles, setSelectedFiles, errorMessage, setErrorMessage }) => {

  const containerRef = useRef();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log('drag over');
  }

  const dragEnter = (e) => {
    e.preventDefault();
    console.log('drag enter');
  }

  const dragLeave = (e) => {
    e.preventDefault();
    console.log('drag leave');
  }

  const fileDrop = (e) => {
    e.preventDefault();
    console.log('file drop');
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
    console.log(files);
  }

  const handleFiles = files => {
    for (let file of files) {
      if (validateFile(file)) {
        // add to an array so we can display the name of file
        setSelectedFiles(prevArray => [...prevArray, file]);
      } else {
        // add a new property called invalid
        file.invalid = true;

        // add to the same array so we can display the name of the file
        setSelectedFiles(prevArray => [...prevArray, file]);

        // set error message
        setErrorMessage('File type not permitted');
      }
    }
  }

  const validateFile = file => {
    const vaildTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (vaildTypes.indexOf(file.type) === -1) {
      console.log('invalidated');
      return false;
    }
    console.log('validated')
    return true;
  }

  const fileSize = (size) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  const fileType = (fileName) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
  }


  const onUpload = async () => {
    handleClickOpen();

    /* 
    폼 생성 및 파일 containing 확인
    파일 binary 업로드를 시켜야함 
   */

    const formData = new FormData();
    console.log(selectedFiles);
    formData.append('files[]', selectedFiles[0]);
    formData.append('files[]', selectedFiles[1]);
    // Display the key/value pairs
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    //   }
    //   if (true) {
    //     containerRef.current.style.display = 'none';
    //     console.log(containerRef.current.style.display);
    //  }


    // 파일별 업로드
    const resp = await post('http://localhost:8000', formData, {
      'content-type': 'multipart/form-data'
    });
    console.log(resp);

    // 파일별 Progress바 보여주기

    //  Modal 닫기

  }

  return (
    <div className="container" ref={containerRef}>
      <div className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}>
        <div className="drop-message">
          <img src={Im} />
          <p>Drag & Drop files here or</p>
        </div>
      </div>
      <div className="file-display-container">
        {
          selectedFiles.map((data, i) =>
            <div className="file-status-bar" key={i}>
              <div>
                <div className="file-type-logo"></div>
                <div className="file-type">{fileType(data.name)}</div>
                <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
              </div>
              <div className="file-remove">X</div>
            </div>
          )
        }
        <div>
          <p>or</p>
          <p>
            <label htmlFor="upload-photo">
              <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={(e) => handleFiles(e.target.files)}
              />
              <Button color="secondary" variant="contained" component="span">
                Choose a file
              </Button>
            </label>
          </p>
          <p>
            <Button color="primary" variant="contained" onClick={onUpload}>
              Upload
            </Button>
            <SimpleDialog open={open} onClose={handleClose} files={selectedFiles} />
          </p>
        </div>
      </div>
    </div>
  )
}
export default DropZone;
