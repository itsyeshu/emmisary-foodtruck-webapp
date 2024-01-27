import FoodTruck from "./FoodTruck"

function FetchFoodTrucks ({ getFoodTrucks }){
  const handleClick = (e) => {
    // Request location details
    const lat = 0, lon = 0

    // Call getFoodTrucks
    getFoodTrucks(lat, lon)
  }

  return <>
    <button 
      className = "button-main"
      onClick = {handleClick}
    >
      Refresh Trucks
    </button>
  </>
}

function FoodTrucks({ foodTrucks }){
  const noFoodTrucks = !foodTrucks || !foodTrucks?.length

  if(noFoodTrucks){
    return <>
    <p>No food trucks near you!</p>
    </>
  }
  return <>
    <p>Showing <b>{foodTrucks.length}</b> results</p>
    <ul className="ul-no_style">
      {
        foodTrucks.map(foodTruck => (
          <FoodTruck
            key={foodTruck.id}
            foodTruck={foodTruck}
          />
        ))
      }
    </ul>
  </>
}

function SideBar({ foodTrucks, getFoodTrucks }){
  return (
    <>
      <FetchFoodTrucks
        getFoodTrucks={getFoodTrucks}
        />
      <FoodTrucks foodTrucks={foodTrucks} />
    </>
  )
}

export default SideBar