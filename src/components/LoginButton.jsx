import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div>
      <Link to="/login" className="mx-2 bg-blue-800 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900">Admin Login</Link>
    </div>
  )
}

export default LoginButton
