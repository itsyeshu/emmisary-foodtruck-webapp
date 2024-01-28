import FoodTruck from "./FoodTruck"

function FoodTrucks({ foodTrucks, fetchedRes, isLocationLoading }){
  const noFoodTrucks = !foodTrucks || !foodTrucks?.length

  if(isLocationLoading){
    return <p className="status-message">
    Hang on! Loading food trucks near you...
    </p>
  }
  
  if(noFoodTrucks){
    if(fetchedRes){
      return <>
        <p className="status-message">No results found!</p>
      </>
    }
    return <>
      <p className="status-message">Click on 'Get Location' or add your location coords</p>
    </>
  }
  return <>
    <p className="status-message">Showing <b>{foodTrucks.length}</b> results</p>
    <ul className="ul-no_style flex">
      {
        foodTrucks.map((foodTruck, index)=> (
          <FoodTruck
            key={foodTruck.index}
            index= {index + 1}
            foodTruck={foodTruck}
          />
        ))
      }
    </ul>
  </>
} 


export default FoodTrucks