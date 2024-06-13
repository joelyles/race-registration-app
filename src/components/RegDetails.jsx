import { useEffect } from "react";
import instance from "../api/ApiServer";

const RegDetails = () => {

  useEffect(() => {
    const getRegDetails = async () => {
      try {
        const response = await instance.get('/registrants');
        const details = response;
        console.log(details.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRegDetails();
  }, [])

  return (
    <>
      <div className="h-full flex px-4 bg-slate-200">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-3/4 w-vw sm:w-3/4">
          <div className="mx-auto">
            <h2 className="font-semibold tracking-wider sm:text-2xl">Thanks for registering, # # # # # #!</h2>
          </div>
          <div className="pt-5 pl-4">
            <p>Registration completed on # # # #</p>
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
