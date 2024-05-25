const Hero = () => {
  return (
    <>
      <section className="bg-slate-200">
        <div className="mx-auto max-w-6xl pt-10 px-2 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-between sm:m-auto h-36 sm:h-48 md:h-52">
            <div className="flex flex-col">
              <div className="text-4xl font-semibold md:text-5xl">Macon Marathon</div>
              <div className="hidden md:block tracking-wider">nothing special, just a marathon in macon, ga</div>
            </div>
            <div className="flex text-2xl md:text-3xl py-10">August 1, 2024</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
