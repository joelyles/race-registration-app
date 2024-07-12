import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import HomeButton from "./HomeButton";

const Footer = () => {
  return (
    <section className="bg-gray-800 ">
      <div className="flex flex-col md:flex-row">
        <div className="mx-auto flex items-center justify-center h-20 max-w-6xl">
          <div className="flex gap-2 mt-2">
            <HomeButton />
            <RegisterButton />
            <LoginButton />
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center">
        <div className="text-slate-600 flex justify-center tracking-widest mx-2 px-4 pb-4 md:py-8">this isn't a real marathon.</div>
        </div>
      </div>  
    </section>
  )
}

export default Footer
