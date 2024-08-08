import { useState, useEffect } from "react";
import instance from "../api/ApiServer";
import RegCards from "./RegCards";
import Navigation from "./Navigation";

const RegDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getRegDetails = async () => {
      try {
        const response = await instance.get('/registrants');
        const details = response;
        const regArray = Object.values(details.data);
        setItems(regArray);
        console.log(details.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRegDetails();
  }, [])

  return (
  <>
  <div className="absolute top-0 min-w-full min-h-dvh bg-slate-600">
        <Navigation />  
    <div className="flex flex-col bg-slate-600 h-screen p-4">
      <h2 className="mx-auto my-8 font-semibold tracking-wider justify-center text-2xl">Registrants</h2>
    {items.map((item, index) => (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-4 px-4 mx-8">
        <div className="bg-slate-200 shadow-slate-400 shadow-lg rounded-lg relative">
          <div className="px-4 py-4">
            <div className="flex flex-col mt-2 items-start">
              <div className="font-semibold text-blue-900">Name: <span key={index} className="font-normal">{item.firstname} {item.lastname}</span></div>
              <div className="italic">Age Group: &nbsp; <span className="not-italic font-normal">{item.age}</span></div>
              <div className="italic">Hometown: &nbsp; <span className="not-italic font-normal">{item.city}, {item.state}</span></div>
              <div className="italic">Email: &nbsp; <span className="not-italic font-normal">{item.email}</span></div>
              <div className="italic">Phone: &nbsp; <span className="not-italic font-normal">{item.phone}</span></div>
              <div className="italic">Submission id: &nbsp; <span className="not-italic font-normal">{item._id.slice(-10)}</span></div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
  </>
  )
}

export default RegDetails
