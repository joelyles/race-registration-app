import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="h-dvh">
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout
