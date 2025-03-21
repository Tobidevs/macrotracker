function Stats() {
  return (
    <>
      <div className="mt-11 h-72  flex flex-col items-center justify-center ">
        <h1 className="text-4xl ">Your Macros</h1>
        <div className="mt-6 pr-24 pl-24 pb-3 h-3/5 w-5/12 bg-[#18181B] rounded-3xl flex justify-center items-center ">
          <div className=" h-5/6 w-1/4 flex justify-center items-center flex-col">
            <h1 className="text-2xl mb-1 text-[#708EDF]">Calories</h1>
            <h1 className="text-5xl">2349</h1>
          </div>
          <div className=" h-5/6 w-1/4 flex justify-center items-center flex-col">
            <h1 className="text-2xl mb-1 text-[#FF7C6B]">Protein</h1>
            <h1 className="text-5xl">126</h1>
          </div>
          <div className=" h-5/6  w-1/4 flex justify-center items-center flex-col">
            <h1 className="text-2xl mb-1 text-[#FFE864]">Fats</h1>
            <h1 className="text-5xl">43</h1>
          </div>
          <div className=" h-5/6 w-1/4 flex justify-center items-center flex-col">
            <h1 className="text-2xl mb-1 text-[#91EA68]">Carbs</h1>
            <h1 className="text-5xl">403</h1>
          </div>
        </div>
      </div>
        
    </>
  )
}
export default Stats