const Navigation = () => {
  return (
    <section className="h-12 bg-yellow-500 content-center">
      <div className="pt-3 x-10">
        <div className="px-4">
          <div className="flex flex-row ">
            <div className="">
              <a href="/" className="mx-2 bg-gray-800 text-slate-200 px-4 py-2 rounded-md">Register</a>
              <a href="/" className="mx-2 bg-gray-800 text-slate-200 px-4 py-2 rounded-md">Admin Login</a>
            </div>
            <span className="ml-auto text-3xl">Macon Marathon</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navigation
