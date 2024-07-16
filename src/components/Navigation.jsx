import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";

const Navigation = () => {
  const activeLink = ({ isActive }) => isActive ? "bg-blue-900 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900" : "bg-transparent text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900";

  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-left">
            <div className="flex mx-2 space-x-2">
              <NavLink to="/" className={activeLink}>Home</NavLink>
              <NavLink to="/register" className={activeLink}>Register</NavLink>
              <NavLink to="/login" className={activeLink}>Login</NavLink>
            </div>
            {/* <NavLink to="/"  className="hidden sm:block ml-auto text-3xl font-semibold">Macon Marathon</NavLink> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation
