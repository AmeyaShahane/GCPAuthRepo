import logo from './logo.svg';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'; // Import the jwt-decode library
import './App.css';

function App() {
  const [user, setUser] = useState({}); // State to manage the user data

  function handleCallBackResponse(response) {
    console.log("ENCODED JWT ID TOKEN: " + response.credential);

    // Assuming the response.credential contains user data, you can set it in the state
    var userObject = jwtDecode(response.credential); // Decode the JWT ID token
    setUser(userObject);

    // Hide the Google Sign-In button after successful sign-in
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "728988872118-len053kp1gauetpcccivafalau64hvcu.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);

  function handleSignOut(event) {
    // Handle the sign-out logic here
    setUser({}); // Reset the user state to an empty object to indicate sign out

    // Show the Google Sign-In button after sign-out
    document.getElementById("signInDiv").hidden = false;
  }

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <div>
          <h3>Hello World!</h3>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;

