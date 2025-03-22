import NavBar from "../components/NavBar";

function Foodlogger() {
  return (
    <>
      <div className="pt-10 h-screen">
        <NavBar />
        <main className="h-3/4  flex justify-center">
          <div className="border-2 border-red-200 w-1/3">
            <div className="h-1/8 w-full ">
              <form></form>
            </div>
            <div className="h-7/8 w-full"></div>
          </div>
          <div className="border-2 border-red-200 w-1/3"></div>
        </main>
      </div>
    </>
  );
}

export default Foodlogger;
