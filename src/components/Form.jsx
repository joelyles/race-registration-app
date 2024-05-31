const Form = () => {
  return (
    <>
      <div className="flex h-screen px-4 bg-slate-200 ">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-1/2 w-3/4">
          <h4 className="flex font-semibold tracking-wider">Registration Form</h4>
          <div className="flex flex-col p-8 bg-blue-200 mt-6 rounded-md shadow-md">
            <div className="flex flex-col bg-slate-200 max-w-sm">
              <div className="flex flex-row justify-left gap-4 p-2">
                <div className="flex flex-col grow">
                  <label className="p-1">First Name</label>
                  <input name="firstname" className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="First Name"></input>
                </div>
                <div className="flex flex-col grow">
                  <div className="p-1">Last Name</div>
                  <input className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Last Name"></input>
                </div>
              </div>
                <div className="flex flex-col p-2">
                  <div className="p-1">Age Group</div>
                  <select className="max-w-44 min-w-28 p-1 rounded-md shadow-md">
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56+">56+</option>
                  </select>
                </div>
              <div className="flex flex-col p-2">
                <div className="flex flex-col gap-2">
                  <div className="p-1">Location</div>
                  <input className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="City"></input>
                  <input className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="State"></input>
                </div>
              </div>
              <div className="flex flex-col justify-left gap-4 p-2">
                <div className="flex flex-col">
                  <div className="p-1">Email</div>
                  <input className="max-w-44 min-w-64 p-1 rounded-md shadow-md" type="text" placeholder="email@emailaddress.email"></input>
                </div>
                <div className="flex flex-col">
                  <div className="p-1">Phone Number</div>
                  <input className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="123-555-1234"></input>
                </div>
              </div>
            </div>
          </div>
          <h4 className="flex justify-center pt-8">submit button goes here</h4>
        </div>
      </div>
    </>
  )
}

export default Form