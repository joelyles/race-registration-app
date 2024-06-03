import { Link } from "react-router-dom"
import SubmitButton from "./SubmitButton"

const Signin = () => {
  return (
    <>
     <div className="flex h-screen px-4 bg-slate-200 ">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-1/2 w-3/4 sm:h-96 sm:w-96">
          <h4 className="flex font-semibold tracking-wider">Account Login </h4>
          <div className="flex justify-center p-8 bg-blue-200 mt-6 rounded-md shadow-md">
            <div className="flex flex-col bg-slate-200 max-w-lg sm:max-w-sm">
              <div className="flex flex-col justify-left gap-4 p-2">
                <div className="flex flex-col grow">
                  <label className="p-1">Username</label>
                  <input name="username" className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Username"></input>
                </div>
                <div className="flex flex-col grow">
                  <label className="p-1">Password</label>
                  <input className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="password" placeholder="password"></input>
                </div>
              </div>
              <h4 className="flex justify-center pt-8 pb-8">submit button goes here</h4>
              <SubmitButton />
            </div>
          </div>   
        </div>
      </div>
    </>
  )
}

export default Signin