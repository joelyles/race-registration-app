import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards"
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navigation />
      <div className="h-screen">
      <Hero />
      <About />
      <Cards />
      </div>
      <Footer />
    </>
  )
}

export default App