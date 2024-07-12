import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div>
      <Link to="/register" className="mx-2 bg-transparent text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900">Register</Link>
    </div>
  )
}

export default RegisterButton
