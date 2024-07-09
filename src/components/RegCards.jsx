import RegCard from './RegCard'

const RegCards = ({item}) => {
  return (
    <>
      <div className="h-full flex px-4 bg-slate-200">
        <div className="flex flex-col mx-auto mt-8 p-6 rounded-md shadow-md bg-white h-3/4 w-vw sm:w-3/4">
          <div className="mx-auto">
            <h2 className="font-semibold tracking-wider sm:text-2xl">All Registrants </h2>
          </div>
          <RegCard />
        </div>
      </div>
    </>
  )
}

export default RegCards
