import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link to="/" className="mx-2 bg-blue-800 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900">Home</Link>
    </div>
  )
}

export default HomeButton