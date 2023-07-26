import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
  function handleCallBackResponse(response) {
    console.log("ENCODED JWT ID TOKEN: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "728988872118-len053kp1gauetpcccivafalau64hvcu.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" } // Added a comma to separate the arguments
    );
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;

