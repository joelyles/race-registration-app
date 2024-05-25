import RegisterButton from "./RegisterButton"

const About = () => {
  return (
    <div className="flex h-auto bg-slate-300 border-t-slate-700">
      <div className="flex flex-col items-center py-10 px-20 mx-auto max-w-6xl">
       <p className="tracking-wider indent-5 pb-10">This is probably the hottest time of year to run a marathon in Georgia. But thats ok, we will have plenty of hydration and nutrition for you. There will be aid stations with tents that have mist machines to cool you off. We will start at 5am, so that it's a little cooler out. This will be a point to point race and you will finish up by running into the north end-zone of the Mercer Bears football stadium. Check out our testimonials. Sign up today.</p>
       <RegisterButton />
      </div>
    </div>
  )
}

export default About
