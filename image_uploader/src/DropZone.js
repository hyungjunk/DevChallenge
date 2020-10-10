import React, { useState, useRef, useEffect } from 'react';
import Im from './image.svg';
import { Button } from '@material-ui/core';
import M from 'materialize-css/dist/js/materialize.min.js';
import { SimpleDialog } from './SimpleDialog';
import { post } from 'axios';
import { v4 as uuidv4 } from 'uuid';

const DropZone = ({ selectedFiles, setSelectedFiles, errorMessage, setErrorMessage, setUploadSuccess }) => {

  const containerRef = useRef();
  const imgDropZoneRef = useRef();
  const [open, setOpen] = useState(false);
  const [percent, setPercent] = useState(0);
  const [uploadFinished, setUploadFinished] = useState(false);

  useEffect(() => {
    if (uploadFinished === true) {
      setTimeout(() => {
        setOpen(false);
        setUploadSuccess(true);
      }, 1000);
    }
  }, [uploadFinished])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const dragOver = (e) => {
    e.preventDefault();
  }

  const dragEnter = (e) => {
    imgDropZoneRef.current.style.background='green'
    e.preventDefault();
  }

  const dragLeave = (e) => {
    imgDropZoneRef.current.style.background='white'
    e.preventDefault();
  }

  const fileDrop = (e) => {
    imgDropZoneRef.current.style.background='white'
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  }

  const handleFiles = files => {
    for (let file of files) {
      if (validateFile(file)) {
        // add to an array so we can display the name of file
        // console.log(file)
        setSelectedFiles(prevArray => [...prevArray, file]);
      } else {
        // set error message
        M.toast({html: 'File type not permitted'})
      }
    }
  }

  const validateFile = file => {
    const vaildTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (vaildTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  }

  const fileSize = (size) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  const getFileName = (fileFullName) => {
    return fileFullName.substring(0, fileFullName.lastIndexOf('.'));
  }


  const getFileType = (fileFullName) => {
    return fileFullName.substring(fileFullName.lastIndexOf('.') + 1, fileFullName.length) || fileFullName;
  }


  const onUpload = async () => {
    handleClickOpen();

    /* 
    폼 생성 및 파일 containing 확인
    파일 binary 업로드를 시켜야함
   */

    const formData = new FormData();
    
    selectedFiles.map(file => {
      let newFileName = `${getFileName(file.name)}_${uuidv4()}.${getFileType(file.name)}`
      formData.append('files[]', file, newFileName);
    })

    // 파일별 업로드 및 progress bar showing
    const resp = await post('http://localhost:8000', formData, {
      'content-type': 'multipart/form-data',
      onUploadProgress: event => {
        // 전체 파일 크기 확인
        if (event.total) {
          let percentCompleted = Math.round((event.loaded * 100) / event.total);
          setPercent(percentCompleted);
          if (Number(percentCompleted) === 100) {
            setUploadFinished(true);
          }
        }
      }
    });
    if (resp.status === 200) {
      setUploadFinished(true)
    }
  }

  const onRemoveFile= (index) => {
    let files = [...selectedFiles];
    files.splice(index, 1)
    setSelectedFiles(files);
  }

  return (
    <div className="container" ref={containerRef}>
      <div className="drop-container"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        ref={imgDropZoneRef}
        >
        <div className="drop-message">
          <img src={Im} />
          <p>Drag & Drop files here</p>
        </div>
      </div>
      <div className="file-display-container">
        {
          selectedFiles.map((data, i) =>
            <div className="file-status-bar" key={i}>
              <div>
                <div className="file-type-logo"></div>
                <p className={`file-name ${data.invalid ? 'file-error' : ''}`}>
                  <span>{data.name}</span>
                  <span className="file-size">({fileSize(data.size)})</span>
                  <button className="file-remove" onClick={()=>{onRemoveFile(i)}}>X</button>
                </p>
              </div>
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
          <div style={{ textAlign: 'center' }}>
            <Button color="primary" variant="contained" onClick={onUpload}>
              Upload
            </Button>
            <SimpleDialog open={open} onClose={handleClose} percent={percent} finished={uploadFinished} files={selectedFiles} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DropZone;
