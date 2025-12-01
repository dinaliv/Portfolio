import "./index.css"
import Header from './Header'
import Footer from './Footer'
import Factory from "./Factory"
import Pond from "./Pond"
import TradArt from "./Tradart"

function App() {
  

  return (
    <>
      <Header></Header>
      <main className="px-4 lg:px-[10%] flex flex-col gap-20 mt-10">

        {/* 3D Section: Wrapped in a div with an ID for the Header link */}
        <section id="3d-works" className="flex flex-col gap-10 scroll-mt-32">
            
            <Factory />
            <Pond />
        </section>

        {/* Traditional Art Section */}
        {/* The ID "traditional-art" is already inside the TradArt.jsx file */}
        <div className="scroll-mt-32"> 
           <TradArt />
        </div>
  
      </main>
      <Footer></Footer>
    </>
    
  );
}

export default App
