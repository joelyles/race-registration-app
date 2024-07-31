import Navigation from "./Navigation"

const Hero = () => {
  return (
    <>
    <div className="absolute top-0 min-h- min-w-full">
      <section style={{ backgroundImage: `url(/images/martins-zemlickis-NPFu4GfFZ7E-unsplash.jpg)`
       }} className="bg-fixed bg-cover bg-center" >
        <div className="backdrop-brightness-35">
        <Navigation />
        </div>
        <div className="backdrop-brightness-35 mx-auto pt-10 px-2 sm:px-6 md:px-8">
          <div className="flex flex-col items-right justify-between max-w-lg  h-48 sm:h-48 md:h-48">
            <div className="flex flex-col">
              {/* <div className="text-4xl font-semibold md:text-5xl text-slate-200">Macon Marathon</div> */}
              <div className="hidden md:block tracking-wider text-slate-200 text-5xl ">nothing special, <br/> just a marathon in macon, ga</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Hero
