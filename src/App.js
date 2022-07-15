import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Welcome from "./components/Welcome";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom/client";

function App() {
  const adminUser = {
    email: "user@email.com",
    password: "pass123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");

      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
  };

  return (
    <Router>
      <div className="App">
        {user.email != "" ? (
          <Welcome />
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>

      <Route path="/" exact component={Welcome} />
      <Route path="/login" component={LoginForm} />
    </Router>
  );
}

export default App;
