import "./index.css"
import Header from './Header'
import Footer from './Footer'
import Factory from "./Factory"
import Pond from "./Pond"
import TradArt from "./Tradart"
import About from "./About"
import Programming from "./Programming"


function App() {
  

  return (
    <>
      <Header></Header>
      <main className="px-4 lg:px-[10%] flex flex-col gap-20 mt-10">
        
        <About />

        {/* 3D Section: Wrapped in a div with an ID for the Header link */}
        <section id="3d-works" className="flex flex-col gap-10 scroll-mt-32">
            <h2 className="font-display text-xl font-bold bg-[#ede8f5] px-3 py-1 self-start">3D Works</h2>
            <Factory />
            <Pond />
        </section>

        <Programming />

        {/* Traditional Art Section — hidden, kept for later */}
        <div className="hidden scroll-mt-32">
           <TradArt />
        </div>
  
      </main>
      <Footer></Footer>
    </>
    
  );
}

export default App
