import React from 'react';
import './App.css';
import './assets/main.css';

function App() {
  return (
    <div className="App">
      <div className="m-5">
        <span className="hash-tag">#HashTag</span>
      </div>
      <div className="card-wrapper">
        <h5 className="card-title">My Title</h5>
        <p className="text-gray-700 text-lg">Content goes here</p>
      </div>
    </div>
  );
}

export default App;
