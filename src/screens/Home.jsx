import Hero from "../components/Hero";
import About from "../components/About";
import Cards from "../components/Cards"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <Hero />
        <About />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default Home
