import FoodTruck from "./FoodTruck"

function FoodTrucks({ foodTrucks, isLoading }){
  const noFoodTrucks = !foodTrucks || !foodTrucks?.length

  if(isLoading){
    return <>
      <p className="statusMessage">No results found!</p>
    </>
  }

  if(noFoodTrucks){
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