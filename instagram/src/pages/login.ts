import { useEffect, useState, useContext, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import firebaseContext from "../context/firebase";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(firebaseContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleEvent = async (event: FormEvent){
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error: any ) {
          setError(error.message);
    }
  }
  useEffect(() => {
    document.title = "Login - Instagram";
},[])
return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md">
        <div className="px-6 py-8 bg-white shadow-md text-black sm:rounded-lg">
          <form onSubmit={handleEvent}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>  
)}