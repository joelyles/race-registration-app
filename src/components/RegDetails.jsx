import { useState, useEffect } from "react";
import instance from "../api/ApiServer";
import RegCards from "./RegCards";

const RegDetails = () => {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getRegDetails = async () => {
      try {
        const response = await instance.get('/registrants');
        const details = response;
        const regArray = Object.values(details.data);
        const objectData = regArray.entries();
        setItems(regArray);
        console.log(details.data)
        const registrantData = details.data;
        setDetails(registrantData);
      } catch (err) {
        console.log(err)
      }
    }
    getRegDetails();
  }, [])

  return (
    <>
    {details.map((item, index) => (
      <>
                <RegCards key={index} item={item}/>
                <p>{details.data}</p>
                </>
              ))}
    <RegCards />
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-4 px-4">
      <div className="bg-slate-200 shadow-slate-400 shadow-lg rounded-lg relative">
        <div className="px-4 py-4">
          <div className="flex flex-col mt-2 items-start">
            <div className="font-semibold text-blue-900">Name</div>
            <div className="italic">Age Group</div>
            <div className="italic">Hometown</div>
            <div className="italic">Email</div>
            <div className="italic">Phone</div>
          </div>
        </div>
      </div>
    </div>
      <div className="h-full flex px-4 bg-slate-200">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-3/4 w-vw sm:w-3/4">
          <div className="mx-auto">
            <h2 className="font-semibold tracking-wider sm:text-2xl">Thanks for registering, </h2>
          </div>
          <div className="pt-5 pl-4">
            <p>Registration completed on # # # #</p>
          </div>

          <div>
             {/*  {items.map((item, index) => (
                <p key={index}>
                  {item.firstname}
                  <span>{item.lastname}</span>
                </p>
              ))} */}
          </div>
          <div className="pt-6">
            <table>
              <tbody>
                <tr>
                  <td className="font-semibold p-4">Bib Number</td>
                  <td className="p-4"># #</td>
                </tr>
                <tr>
                  <td className="font-semibold p-4">Name</td>
                  <td className="p-4"># #</td>
                </tr>
                <tr>
                  <td className="font-semibold  p-4">Age Group</td>
                  <td className="p-4"># #</td>
                </tr>
                <tr>
                  <td className="font-semibold p-4">City</td>
                  <td className="p-4"># #</td>
                </tr>
                <tr>
                  <td className="font-semibold p-4">State</td>
                  <td className="p-4"># #</td>
                </tr>
                <tr>
                  <td className="font-semibold p-4">Email</td>
                  <td className="p-4"># #</td>
                </tr>
                <tr>
                  <td className="font-semibold p-4">Phone</td>
                  <td className="p-4"># #</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegDetails
