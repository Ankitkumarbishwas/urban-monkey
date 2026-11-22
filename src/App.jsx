import Banner, { Banner2 } from "./components/Banner";
import Header from "./components/Header";
import HomeItems from "./components/HomeItems";
import homedata from "./homedata";


function App() {

  return (
    <div>
      <Header />
      <div className="pl-5 pr-5 pb-5 flex flex-col gap-4">
        <Banner />
        <Banner2 />
        <HomeItems data ={homedata}/>
      </div>
    </div>
  )
}

export default App;