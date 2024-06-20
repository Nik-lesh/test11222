import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import FirebaseContext, { FirebaseContextProps } from "../context/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
} from "firebase/auth";
import { firestore } from "../lib/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../servies/firebase";
import "./styles/auth.css"; // Import the CSS file

interface SignUpProps {
  navigate: NavigateFunction; // Define the navigate prop
}

export default function signup({ navigate }: SignUpProps) {
  const context = useContext(FirebaseContext);
  // Type assertion
  const { firebase } = context as FirebaseContextProps;
  const auth = getAuth(firebase);

  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      try {
        const createdUserResult: UserCredential =
          await createUserWithEmailAndPassword(auth, emailAddress, password);

        // authentication
        // -> emailAddress & password & username (displayName)
        await updateProfile(createdUserResult.user, { displayName: username });
        // firebase user collection (create a document)
        await firestore.collection("users").add({
          userId: createdUserResult.user?.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: ["2"],
          followers: [],
          dateCreated: Date.now(),
        });

        navigate(ROUTES.DASHBOARD);
      } catch (error: any) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setUsername("");
      setError("That username is already taken, please try another.");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
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

        <form onSubmit={handleSignUp} method="POST">
          <input
            aria-label="Enter your username"
            type="text"
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
          <input
            aria-label="Enter your full name"
            type="text"
            placeholder="Full name"
            onChange={({ target }) => setFullName(target.value)}
            value={fullName}
          />
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
            Sign Up
          </button>
        </form>
        <div className="signup-link-container">
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
