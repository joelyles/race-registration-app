import Navigation from "./Navigation"

const Hero = () => {
  return (
    <>
    <div className="absolute top-0 min-w-full">
      <section style={{ backgroundImage: `url(/images/martins-zemlickis-NPFu4GfFZ7E-unsplash.jpg)`
       }} className="bg-fixed bg-cover bg-center" >
        <div className="backdrop-brightness-35">
        <Navigation />
        </div>
        <div className="backdrop-brightness-35 mx-auto pt-10 min-h-96">
          <div className="flex flex-col mx-auto max-w-7xl px-12">
          <div className="flex flex-col items-right max-w-lg h-48 sm:h-48 md:h-48">
            <div className="flex flex-col">
              {/* <div className="text-4xl font-semibold md:text-5xl text-slate-200">Macon Marathon</div> */}
              <div className="hidden md:block tracking-wider text-slate-200 text-6xl">nothing special, <br/> just a marathon in macon, ga</div>
            </div>
          </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Hero
