import useGeoLocation from "../hooks/useGeoLocation"

import FoodTrucks from "./FoodTrucks"
import SearchFoodTrucks from "./SearchFoodTrucks"


function SideBar({ foodTrucks, getFoodTrucks, isError, fetchedRes }){
  const { locationError, isLocationLoading, setIsLocationRequested, isLocationRequested } = useGeoLocation(getFoodTrucks)

  let statusMessage = null
  if(locationError){
    statusMessage = <p className="status-message para-error">{locationError}</p>
  }else if(isLocationRequested){
    statusMessage = <p className="status-message">Location request requested</p>
  }else if(isLocationLoading){
    statusMessage = <p className="status-message">Fetching Location ...</p>
  }else if(isError){
    statusMessage = <p className="status-message para-error">{isError}</p>
  }
  return (
    <section
      className="main"
    >
      <div className="wrapper">
        <SearchFoodTrucks
          getFoodTrucks={getFoodTrucks}
          isLocationRequested
          setIsLocationRequested={setIsLocationRequested}
        />
        
        {statusMessage}
        
        {!isError &&
          <FoodTrucks
          foodTrucks={foodTrucks}
          fetchedRes={fetchedRes}
          />
        }
      </div>
    </section>
  )
}

export default SideBar