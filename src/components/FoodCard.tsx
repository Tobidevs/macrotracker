import EditImg from "../assets/Edit Pencil 02 Icon.svg";

function FoodCard() {
  return (
    <>
      <div className="w-96 h-25 bg-[#18181B] rounded-2xl flex p-3">
        <div className="w-3/4  pl-3 flex flex-col justify-center">
          <div className="w-full overflow-x-auto whitespace-nowrap flex ">
            <h1 className="text-xl mb-1">Shredded Pork</h1>
            <span className="ml-3 mr-3">&bull;</span>
            <h1 className="text-xl">6 oz serving</h1>
          </div>

          <div className="flex gap-5 text-xl">
            <h1>
              301<span className="text-[#708EDF]">C</span>
            </h1>
            <h1>
              12 <span className="text-[#FF7C6B]">P</span>
            </h1>
            <h1>
              10 <span className="text-[#FFE864]">F</span>
            </h1>
            <h1>
              28 <span className="text-[#91EA68]">C</span>
            </h1>
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center ">
          <img src={EditImg} className="w-12 " />
        </div>
      </div>
    </>
  );
}

export default FoodCard;
