import { Link } from "react-router-dom"
import SubmitButton from "./SubmitButton"

const Signin = () => {
  return (
    <>
     <div className="h-full flex px-4 bg-slate-200">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-3/4 w-vw sm:w-3/4">
          <h4 className="flex font-semibold tracking-wider justify-center text-2xl">Account Login </h4>
          <div className="flex flex-col items-center p-8 bg-blue-200 mt-6 rounded-md shadow-md h-3/4">
            <div className="flex flex-col overflow-scroll my-auto bg-blue-100 max-w-m w-vw p-8 rounded-md">
              <div className="flex flex-col justify-left gap-4 p-2">
                <div className="flex flex-col grow">
                  <label className="p-1">Username</label>
                  <input name="username" className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Username"></input>
                </div>
                <div className="flex flex-col grow">
                  <label className="p-1">Password</label>
                  <input className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="password" placeholder="password"></input>
                  
                </div>
                 <div className="pt-4 my-auto mx-auto">
              <SubmitButton />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin