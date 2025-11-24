import "./index.css"
import Header from './Header'
import Footer from './Footer'
import Factory from "./Factory"
import Pond from "./Pond"

function App() {
  

  return (
    <>
      <Header></Header>
      <main className="px-[10%] flex flex-col gap-10">
        <Factory></Factory>
        <Pond></Pond>
      </main>
      <Footer></Footer>
    </>
    
  );
}

export default App
