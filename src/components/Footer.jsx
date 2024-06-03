import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import HomeButton from "./HomeButton";

const Footer = () => {
  return (
    <section className="bg-gray-800 ">
      <div className="flex flex-col">
        <div className="mx-auto flex items-center justify-center h-20 max-w-6xl">
          <div className="flex gap-2 mt-2">
            <RegisterButton />
            <LoginButton />
            <HomeButton />
          </div>
        </div>
        <div className="text-slate-600 flex pb-6 justify-center tracking-widest">this isn't a real marathon.</div>
      </div>  
    </section>
  )
}

export default Footer
