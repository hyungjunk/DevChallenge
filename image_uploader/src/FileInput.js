import React from "react";

const noop = () => { };
const FileInput = ({ value, onChange = noop, selectedFiles, setSelectedFiles, errorMessage, setErrorMessage, ...rest }) => {

  const validateFile = file => {
    const vaildTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (vaildTypes.indexOf(file.type) === -1) {
      console.log('invalidated');
      return false;
    }
    console.log('validated')
    return true;
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
  return (
    <div>
      {Boolean(value.length) && (
        <div>Selected files: {value.map(f => f.name).join(", ")}</div>
      )}
      <label>
        Click to select some files...
      <input
          {...rest}
          style={{ display: "none" }}
          type="file"
          onChange={e => {
            console.log(e.target.files)
            handleFiles(e.target.files)
          }}
        />
      </label>
    </div>
  )
};

export default FileInput;