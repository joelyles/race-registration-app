const RegCard = ({item}) => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-4 px-4">
      <div className="bg-slate-200 shadow-slate-400 shadow-lg rounded-lg relative">
        <div className="px-4 py-4">
          <div className="flex flex-col mt-2 items-start">
            <div className="font-semibold text-blue-900">Name {details.data} {/* {item.firstname} {item.lastname} */}</div>
            <div className="italic">Age Group</div>
            <div className="italic">Hometown</div>
            <div className="italic">Email</div>
            <div className="italic">Phone</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegCard
