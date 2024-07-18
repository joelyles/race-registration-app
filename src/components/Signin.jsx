import { useRef, useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom"
import SubmitButton from "./SubmitButton"
import axios from "../api/ApiServer"

const LOGIN_URL = '/login';

const Signin = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  /* username or password update will clear error message */
  useEffect(() => {
    setErrMessage('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({username, password}),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(JSON.stringify(response.data));
      setAuth({ username, password });
      setUsername('');
      setPassword('');
    } catch (err) {
      if (!err?.response) {
        setErrMessage('no server response')
      } else {
        setErrMessage('login attempt failed')
      }
      errRef.current.focus();
    }
  }

  return (
    <>
     <div className="flex px-4">
        <div className="flex flex-col mt-32 items-center mx-auto p-4 h-dvh w-vw sm:w-3/4">
          <p ref={errRef}>{errMessage}</p>
          <h4 className="flex font-semibold tracking-wider justify-center text-2xl">Account Login </h4>
            <div className="flex flex-col my-10 bg-blue-400 w-vw sm:w-72 p-8 rounded-md">
              <div className="flex flex-col justify-left gap-4 p-2">
                <form className="flex flex-col grow" onSubmit={handleSubmit}>
                
                  <input name="username" ref={userRef} className="max-w-44 min-w-28 p-1 rounded-md shadow-md mb-5" type="text" placeholder="username"></input>
                
                
                  <input className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="password" placeholder="password"></input>
                  <button className="bg-blue-800 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900 w-36 mx-auto mt-10">submit</button>
                
                </form>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signin