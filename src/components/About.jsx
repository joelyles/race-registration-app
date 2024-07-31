import RegisterButton from "./RegisterButton"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="flex h-auto bg-slate-300 border-t-slate-700">
      <div className="flex flex-col items-left py-10 px-12 mx-auto max-w-7xl">
        <div className="flex text-2xl md:text-3xl py-10">August 1, 2024</div>
       <p className="tracking-wider pb-10">This is probably the hottest time of year to run a marathon in Georgia. But thats ok, we will have plenty of hydration and nutrition for you. There will be aid stations with tents that have mist machines to cool you off. We will start at 5am, so that it's a little cooler out. This will be a point to point race and you will finish up by running into the north end-zone of the Mercer Bears football stadium. Check out our testimonials.</p>
       <div className="flex">
       <Link to="/register" className="flex mx-auto max-w-32 text-center bg-slate-500 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900">Register Now!</Link>
       </div>
      </div>
    </div>
  )
}

export default About
