import { useRef, useEffect, useState } from "react"
import SubmitButton from "./SubmitButton"
import ApiServer from "../api/ApiServer"
import HomeButton from "./HomeButton"
import Navigation from "./Navigation"

const REGISTER_URL = "/register"

const Form = () => {
  const userRef = useRef();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

/* update CORS settings in backend node JS server */
const handleSubmit = async (e) => {
  e.preventDefault();

    try {
      const response = await ApiServer.post(REGISTER_URL, JSON.stringify({ firstname, lastname, age, city, state, email, phone }),
        {
          headers: {
            'Content-Type': 'application/json'
        }
      }
    );
    console.log(firstname, lastname, age, city, state, email, phone);
    alert(`
      Registration Complete \n 
      details below \n 
      name: ${firstname} ${lastname} \n 
      age: ${age} \n
      location: ${city}, ${state} \n
      email: ${email} \n
      phone: ${phone}
      `)
    setSuccess(true);
      } catch (error) {
        console.log('failed')
      }
  }

  return (
    <>
    {success ? (
      <div className="absolute top-0 min-w-full min-h-dvh bg-slate-600">
        <Navigation />
        <div className="h-full flex px-4">
          <div className="flex flex-col mx-auto mt-32 mb-8 p-4 rounded-md bg-transparent h-1/2 w-5/6 sm:w-3/4">
            <h4 className="flex font-semibold tracking-wider justify-center text-2xl ">Registration Complete</h4>
            <div className="flex flex-col items-center p-4 mt-6 rounded-md h-100">
              <div className="flex flex-col overflow-scroll my-auto bg-blue-300 w-5/6 p-2 rounded-md shadow-md">
                    <div className="flex flex-col">
                      <h4 className="font-semibold pb-4">Registration Details</h4>
                      <div className="flex">
                      name: &nbsp; {firstname} {lastname}
                      <br/> 
                      age: &nbsp; {age}
                      <br/> 
                      location: &nbsp; {city}, {state}
                      <br/> 
                      email: &nbsp; {email}
                      <br/> 
                      phone: &nbsp; {phone}
                      </div>
                    </div>
              </div>
            </div>
            <div className="pt-10"><HomeButton /></div>
          </div>
        </div>
      </div>
    ) : (
      <div className="absolute top-0 min-w-full min-h-dvh bg-slate-600">
        <Navigation />
        <div className="h-full flex px-4 min-h-dvh">
          <div className="flex flex-col mx-auto mb-8 p-4 rounded-md h-3/4 w-5/6 sm:w-3/4">
            <h4 className="flex font-semibold tracking-wider justify-center text-2xl ">Registration Form</h4>
            <div className="flex flex-col items-center p-4 mt-6 rounded-md h-100">
              <div className="flex flex-col overflow-scroll my-auto bg-blue-300 w-5/6 p-2 rounded-md shadow-md">
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-left gap-4 p-2">
                  <div className="flex flex-col grow">
                    <label className="p-1">First Name</label>
                    <input ref={userRef} onChange={(e) => setFirstname(e.target.value)} name="firstname" className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="First Name"></input>
                  </div>
                  <div className="flex flex-col grow">
                    <div className="p-1">Last Name</div>
                    <input onChange={(e) => setLastname(e.target.value)} className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="Last Name"></input>
                  </div>
                </div>
                  <div className="flex flex-col p-2">
                    <div className="p-1">Age Group</div>
                    <select onChange={(e) => setAge(e.target.value)} className="max-w-44 min-w-28 p-1 rounded-md shadow-md">
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
                    <input onChange={(e) => setCity(e.target.value)} className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="City"></input>
                    <input onChange={(e) => setState(e.target.value)} className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="State"></input>
                  </div>
                </div>
                <div className="flex flex-col justify-left gap-4 p-2">
                  <div className="flex flex-col">
                    <div className="p-1">Email</div>
                    <input onChange={(e) => setEmail(e.target.value)} className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="email@emailaddress.email"></input>
                  </div>
                  <div className="flex flex-col">
                    <div className="p-1">Phone Number</div>
                    <input onChange={(e) => setPhone(e.target.value)} className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="123-555-1234"></input>
                  </div>
                  <div className="pt-4 my-auto mx-auto">
                    <button className="bg-blue-800 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900">Submit</button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
    </>
  )
}

export default Form