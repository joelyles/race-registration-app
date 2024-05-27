import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";

const Navigation = () => {

  return (
    <section className="bg-yellow-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex mx-2 space-x-2">
              <RegisterButton />
              <LoginButton />
            </div>
            <span className="hidden sm:block ml-auto text-3xl font-semibold">Macon Marathon</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation
