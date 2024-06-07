import { useRef, useEffect, useState } from "react"
import SubmitButton from "./SubmitButton"

const REGISTER_URL = "/register"

const Form = () => {
  const userRef = useRef();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [home, setHome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

const handleSubmit = async (e) => {
  e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({ firstname, lastname, age, home, email, phone }),
        {
          headers: {
            'Content-Type': 'application/json'
        }
      }
    );
      } catch (error) {
        console.log('failed')
      }
  }

  return (
    <>
      <div className="h-full flex px-4 bg-slate-200 ">
        <div className="flex flex-col mx-auto mt-8 mb-8 p-6 rounded-md shadow-md bg-white h-3/4 w-vw sm:w-3/4">
          <h4 className="flex font-semibold tracking-wider justify-center text-2xl ">Registration Form</h4>
          <div className="flex flex-col items-center p-8 bg-blue-200 mt-6 rounded-md shadow-md h-3/4">
            <div className="flex flex-col overflow-scroll my-auto bg-blue-100 w-3/4 p-8 rounded-md">
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
                  <input className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="City"></input>
                  <input className="max-w-72 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="State"></input>
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
                  <SubmitButton />
                 </div>
              </div>
              {/* <button>Submit</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form