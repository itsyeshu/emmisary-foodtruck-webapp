import { useState } from "react"
import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"


function App() {
  const [ foodTrucks, setFoodTrucks ] = useState([])
  const [ isLoading, setIsLoding ] = useState(true)
  
  const getFoodTrucks = () => {
    console.log("Here")
    // setFoodTrucks={setFoodTrucks}
  }

  return (
    <div id="app">
      <Header />
      <MainContent
        className="main"
        foodTrucks={foodTrucks}
        getFoodTrucks = {getFoodTrucks}
        />
      <Footer />
    </div>
  )
}

export default App;
