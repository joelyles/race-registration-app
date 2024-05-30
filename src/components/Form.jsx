const Form = () => {
  return (
    <>
      <div className="flex h-screen px-4 bg-slate-200 ">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-1/2 w-3/4">
          <h4 className="flex font-semibold tracking-wider">Registration Form</h4>
          <div className="flex flex-col p-8 bg-blue-200 mt-6 rounded-md shadow-md">
            <div className="flex flex-row justify-evenly gap-1 p-2">
              <input className="min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Last Name"></input>
              <input className="min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="First Name"></input>
            </div>
            <div className="flex flex-row justify-evenly gap-1 p-2">
              <input className="min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="City"></input>
              <input className="min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="State"></input>
            </div>
            <div className="flex flex-row justify-evenly gap-1 p-2">
              <input className="min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Phone Number"></input>
              <input className="min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Email"></input>
            </div>
          </div>
          <h4 className="flex justify-center pt-8">submit button goes here</h4>
        </div>
      </div>
    </>
  )
}

export default Form