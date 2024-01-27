import LatLonForm from "./LatLonForm"
import FetchFoodTrucks from "./FetchFoodTrucks"

function SearchFoodTrucks({ getFoodTrucks, isLocationRequested, setIsLocationRequested }){
  let classList = "flex flex__vertical"
  return(
    <div className={classList}>
      <LatLonForm 
        getFoodTrucks={getFoodTrucks}
        isLocationRequested={isLocationRequested}
      />
      <span className="dim-text">OR</span>
      <FetchFoodTrucks
        getFoodTrucks={getFoodTrucks}
        isLocationRequested={isLocationRequested}
        setIsLocationRequested={setIsLocationRequested}
      />
    </div>
  )
}

export default SearchFoodTrucks