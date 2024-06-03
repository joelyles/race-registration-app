import { Link } from "react-router-dom";

const SubmitButton = () => {
  return (
    <div>
      <Link to="/" className="bg-blue-800 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-900">Submit</Link>
    </div>
  )
}

export default SubmitButton