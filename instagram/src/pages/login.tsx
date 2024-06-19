import { useState, useContext, useEffect, FormEvent } from "react";
import { Link, NavigateFunction } from "react-router-dom";
import FirebaseContext, { FirebaseContextProps } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./styles/auth.css"; // Import the CSS file

export interface LoginProps {
  navigate: NavigateFunction;
}

export default function Login({ navigate }: LoginProps) {
  const context = useContext(FirebaseContext);

  // Type assertion
  const { firebase } = context as FirebaseContextProps;
  const auth = getAuth(firebase);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, emailAddress, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error: any) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container">
      <img
        src="/images/iphone-with-profile.jpg"
        alt="iPhone with Instagram app"
        className="phone-image"
      />
      <div className="form-container">
        <h1 className="flex justify-center w-full">
          <img src="/images/logo.png" alt="Instagram" className="mt-2 mb-4" />
        </h1>

        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <button disabled={isInvalid} type="submit">
            Login
          </button>
        </form>
        <div className="signup-link-container">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
