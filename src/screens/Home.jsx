import Hero from "../components/Hero";
import About from "../components/About";
import Cards from "../components/Cards"

const Home = () => {
  return (
    <>
        <Hero />
      <div className="mt-96">
        <About />
        <Cards />
      </div>
    </>
  )
}

export default Home
