import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    <div className="static">
      
      <div className="">
      <Navigation />
      <Outlet />
      </div>
        <div className="sticky bottom-0 w-full">
          <Footer />
        </div>
    </div>
    </>
  )
}

export default Layout
