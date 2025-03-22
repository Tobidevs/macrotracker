import { useNavigate } from "react-router-dom";
import PlusSign from "../assets/Plus SVG Icon.svg";
function AddFood() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/foodlogger")
  }
  return (
    <>
      <div className=" flex items-center justify-center h-32">
        <img src={PlusSign} alt="" className="w-15 cursor-pointer" onClick={handleOnClick}/>
        <h1 className="text-4xl ml-3 cursor-pointer" onClick={handleOnClick}>Add Food</h1>
      </div>
    </>
  );
}

export default AddFood;
