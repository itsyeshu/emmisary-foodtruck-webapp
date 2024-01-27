import SideBar from "./SideBar"

function MainContent({ foodTrucks, getFoodTrucks, isError, fetchedRes }){

  return (
    <>
    <SideBar
      foodTrucks={foodTrucks}
      getFoodTrucks={getFoodTrucks}
      isError = {isError}
      fetchedRes={fetchedRes}
    />
    </>
  )
}

export default MainContent