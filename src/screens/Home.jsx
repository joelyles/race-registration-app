import Hero from "../components/Hero";
import About from "../components/About";
import Cards from "../components/Cards"

const Home = () => {
  return (
    <>
    <div className="sm:bg-slate-600">
        <Hero />
      <div className="mt-96 sm:h-screen">
        <About />
        <Cards />
      </div>
    </div>
    </>
  )
}

export default Home
