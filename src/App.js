import React from "react";
import "./App.css";
import Upload from './Components/Upload'
function App() {
 
  return (
    <div>
      <Upload/>
      <h5 className="powered-text">Powered by <a href="http://www.yazanalmatar.com" target="_blank">Yazan Almatar </a> &copy; and <a href="https://azure.microsoft.com/en-us/services/cognitive-services/face/">Microsoft Azure</a> &trade;</h5>
    </div>
  );
}

export default App;
