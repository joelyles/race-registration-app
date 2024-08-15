import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    <div className="static">
      <Navigation />
      <Outlet />
        <div className="w-full">
          <Footer />
        </div>
    </div>
    </>
  )
}

export default Layout
