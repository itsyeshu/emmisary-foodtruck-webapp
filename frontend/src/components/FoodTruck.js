function FoodTruck ({ index, foodTruck }){

  function parseItems(items){
    let foodItems = items.split(":")
    let allFoods = []
    foodItems.map(item => {
      let data = {}
      item.split(";").forEach(dish => {
        dish.split(".").forEach(aDish => {
          aDish.split("/").forEach(bDish => {
            allFoods.push(aDish)
          })
        })
      })
      return data
    })
    return allFoods
  }

  const foodItems = parseItems(foodTruck.items)

  return <>
  <li className="li-no_style foodtruck">
    <div className="foodtruck-wrapper">
      <div className="foodtruck-flying-tags">
        <span className="tag">{index}</span>
        <span className="tag">{foodTruck.type === "truck" ? "Truck" : "Push cart"}</span>
      </div>
      <div className="foodtruck-content">
        <div className="foodtruck-container">
          <div className="foodtruck-title-box">
            <h2 className="foodtruck-title">
              {foodTruck.name}
            </h2>
            <p className="foodtruck-para">
              {foodTruck.address}
            </p>
          </div>
        </div>

        <div className="foodtruck-container">
          <div className="foodtruck-title-box">
            <p className="foodtruck-foodtitle">
              Food items:
            </p>
            <div className="foodtruck-fooditems simple-tags">
              {
                foodItems.slice(0, 5).map(item => 
                  <span className="tag" key={item}>{item}</span>
                )
              }
              {
                foodItems.length > 5 && (
                  <span className="tag">+ {foodItems.length - 5}</span>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  </>
}

export default FoodTruck