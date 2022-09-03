import React, { useState } from "react";
import logo from "../../assets/spotifyLogo.svg";
import { Formik, Form } from "formik";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const endpoint = process.env.REACT_APP_ENDPOINT
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const scopes = [
    "user-read-email",
    "user-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-read-playback-position",
    "user-modify-playback-state",

  ];

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "sachin123" && password === "1234") {
      setUserName("");
      setUserName("");
      navigate("/dashboard");
      window.open(`${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`, "_self");
      return false;

    } else {
      if (!userName || !password) {
        setError("Please enter username and password");
      } else {
        setError("Invalid username or password please try again");
      }
    }
  };
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
      >
        {(formik) => (
          <Form onSubmit={handleSubmit} className="form-block">
            <div className="login-container">
              <img src={logo} className="logo-img" alt="" />
              <div className="login-section">
                <h2>Login</h2>
                <input
                  type="username"
                  name="username"
                  className="input-vlaue"
                  placeholder="Email address or Username"
                  autoComplete="off"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className="input-vlaue"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-block">
                {error !== "" && <div className="error-message">{error}</div>}
                <button
                  className=" input-button"
                  type="submit"
                >
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
