import { NavLink } from "react-router-dom";


const Navigation = () => {
  const activeLink = ({ isActive }) => isActive ? "bg-blue-900 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900" : "bg-transparent text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900";

  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-full px-2 sm:px-6">
        <div className="flex pt-4 sm:flex-row flex-col h-24 items-center justify-between">
          <p className="text-3xl sm:mt-2 font-semibold text-slate-200">Macon Marathon</p>
          <div className="flex flex-2 items-center justify-left">
            <div className="flex mx-2 space-x-2">
              <NavLink to="/" className={activeLink}>Home</NavLink>
              <NavLink to="/register" className={activeLink}>Register</NavLink>
              <NavLink to="/submission" className={activeLink}>Athletes</NavLink>
              {/* <NavLink to="/login" className={activeLink}>Login</NavLink> */}
            </div>
            {/* <NavLink to="/"  className="hidden sm:block ml-auto text-3xl font-semibold">Macon Marathon</NavLink> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation
