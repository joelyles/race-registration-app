const Card = ({ data }) => {
  return (
    <div className="bg-slate-200 sm:shadow-slate-700 shadow-slate-400 shadow-lg rounded-lg">
      <div className="px-4 py-4">
        <div className="flex content-center align-top p-4 sm:h-32 h-44 min-h-full ">"{ data.comments }"</div>
        <div className="flex flex-col mt-4 items-end">
          <div className="font-semibold text-blue-900">{ data.name }</div>
          <div className="italic">Official Time: { data.time }</div>
        </div>
      </div>
    </div>
  )
}

export default Card
