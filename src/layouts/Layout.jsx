import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    <div className="lg:static">
      <Navigation />
      <div className="">
      <Outlet />
      </div>
        <div className="lg:absolute lg:bottom-0 lg:w-full">
          <Footer />
        </div>
    </div>
    </>
  )
}

export default Layout
