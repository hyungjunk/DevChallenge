import React from 'react';
import './App.css';
import './assets/main.css';
import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  // use fontawesome
  // https://mdbootstrap.com/docs/react/content/icons-list/
  // const camera = <FontAwesomeIcon icon={faCamera} />

  const searchBtn = <FontAwesomeIcon icon={faSearch} />

  return (
    <div className="App">
      <div className="text-center mx-10 mt-10 mb-10 h-20 bg-logo">
        <FontAwesomeIcon style={{ marginRight: '30px' }} icon={faSearch} />
        <input className="border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 align-middle" placeholder="Search your images..." />
        <button className="bg-blue-500 float-right hover:bg-gray-600 text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-10">Add Photo</button>
      </div>
      <div class="flex mb-4">
        <div className="bg-sample card-wrapper rounded-lg m-5 w-1/4 h-auto" />
        <div className="card-wrapper rounded-lg m-5 w-1/4" />
        <div className="card-wrapper rounded-lg m-5 w-1/4" />
        <div className="card-wrapper rounded-lg m-5 w-1/4">
          <h5 className="card-title">My Title</h5>
          <p className="text-gray-700 text-lg">Content goes here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
