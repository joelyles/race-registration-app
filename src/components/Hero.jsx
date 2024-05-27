const Hero = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(public/images/martins-zemlickis-NPFu4GfFZ7E-unsplash.jpg)`
       }} className="bg-fixed bg-cover bg-center brightness-50" >
        <div className="mx-auto max-w-6xl pt-10 px-2 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-between sm:m-auto h-36 sm:h-36 md:h-48">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-semibold md:text-5xl text-slate-200">Macon Marathon</div>
              <div className="hidden md:block tracking-wider text-slate-200">nothing special, just a marathon in macon, ga</div>
            </div>
            <div className="flex text-2xl md:text-3xl py-10 text-slate-200">August 1, 2024</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
