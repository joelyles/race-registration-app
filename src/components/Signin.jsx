import { useRef } from "react"
import { Link } from "react-router-dom"
import SubmitButton from "./SubmitButton"

const Signin = () => {
  const userRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  //add handle submit function

  return (
    <>
     <div className="flex px-4">
        <div className="flex flex-col items-center mx-auto my-8 p-4 h-dvh w-vw sm:w-3/4">
          <h4 className="flex font-semibold tracking-wider justify-center text-2xl">Account Login </h4>
            <div className="flex flex-col my-10 bg-blue-400 w-vw sm:w-72 p-8 rounded-md">
              <div className="flex flex-col justify-left gap-4 p-2">
                <div className="flex flex-col grow">
                  <input name="username" className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="text" placeholder="username"></input>
                </div>
                <div className="flex flex-col grow">
                  <input className="max-w-44 min-w-28 p-1 rounded-md shadow-md" type="password" placeholder="password"></input>
                  
                </div>
                 <div className="pt-4 my-auto mx-auto">
              <SubmitButton />
              </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signin