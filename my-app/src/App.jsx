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
      <main className="px-4 lg:px-[10%] flex flex-col gap-10">

        <Factory></Factory>
        <Pond></Pond>
        <TradArt></TradArt>
  
      </main>
      <Footer></Footer>
    </>
    
  );
}

export default App
