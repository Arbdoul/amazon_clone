import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in:", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Registered:", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        alert(error.message);
      });
  };
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const signIn = (e) => {
  //   //do some fancy firebase sigin shittt!!!!
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((auth) => {
  //       console.log(auth);
  //       if (auth) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const register = (e) => {
  //   e.preventDefault();
  //   //do some fancy firebase register shitt!!!!

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((auth) => {
  //       console.log(auth);
  //       if (auth) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign in
          </button>

          <p>
            By signing-in you agree to AMAZON FAKE
            <br /> CLONE of use & sale. Please
            <br />
            see our Privacy Motice, our Cookies Notice
            <br /> and our Interest-Based Ads Notice
          </p>

          <button
            type="submit"
            className="login_registerButton"
            onClick={register}
          >
            Create your Amazon Acount
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
