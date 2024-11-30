import Navbar from "./components/main/Navbar"


function App() {

  return (
    <>
     <Navbar />
     <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-extrabold mt-8">Gym Day!!!</h1>
      </div>
      <div className="flex items-center justify-center mt-8">
      <img src="img/dopa.png" alt="" className="h-[600px] w-[800px]" />
      </div>
        
     </div>
    </>
  )
}

export default App
