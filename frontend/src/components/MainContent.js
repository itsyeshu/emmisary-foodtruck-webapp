import SideBar from "./SideBar"
import Main from "./Main"

function MainContent({ foodTrucks, getFoodTrucks }){

  return (
    <>
    <SideBar
      foodTrucks={foodTrucks}
      getFoodTrucks={getFoodTrucks}
      />
    <Main foodTrucks={foodTrucks} />
    </>
  )
}

export default MainContent