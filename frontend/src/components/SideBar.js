import useGeoLocation from "../hooks/useGeoLocation"

import FoodTrucks from "./FoodTrucks"
import SearchFoodTrucks from "./SearchFoodTrucks"


function SideBar({ foodTrucks, getFoodTrucks, isError, fetchedRes }){
  const { locationError, isLocationLoading, setIsLocationRequested } = useGeoLocation(getFoodTrucks)

  let statusMessage = null
  if(locationError){
    statusMessage = <p className="status-message para-error">{locationError}</p>
  }else if(isError){
    statusMessage = <p className="status-message para-error">{isError}, please try again</p>
  }
  return (
    <section
      className="main"
    >
      <div className="wrapper">
        <SearchFoodTrucks
          getFoodTrucks={getFoodTrucks}
          setIsLocationRequested={setIsLocationRequested}
        />
        
        {statusMessage}
        
        {!isError &&
          <FoodTrucks
          foodTrucks={foodTrucks}
          fetchedRes={fetchedRes}
          isLocationLoading={isLocationLoading}
          />
        }
      </div>
    </section>
  )
}

export default SideBar