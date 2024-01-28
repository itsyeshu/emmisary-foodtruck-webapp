import { useState } from "react"
import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import axios from "./api/axios"

const API_POST_FOODTRUCKS = "/foodtrucksnearme/?format=json"

function App() {
  const [ foodTrucks, setFoodTrucks ] = useState([])
  const [ fetchedRes, setFetchedRes ] = useState(false)
  const [ isError, setIsError ] = useState(null)

  const getFoodTrucks = async (lat, lon) => {
    setIsError(null)
    try{
      const request = await axios.post(API_POST_FOODTRUCKS, {
        "latitude" : lat,
        "longitude" : lon
      })
      const data = request.data
      setFoodTrucks(data.data.foodTrucks)
      setFetchedRes(true)
    } catch(err){
      console.log(err)
      setIsError(err?.message || "Unknown error occured")
    }
  }

  return (
    <div id="app">
      <Header />
      <MainContent
        className="main"
        foodTrucks={foodTrucks}
        getFoodTrucks = {getFoodTrucks}
        isError = {isError}
        fetchedRes={fetchedRes}
        
        />
      <Footer />
    </div>
  )
}

export default App;
