import { useState, useRef } from "react"

function LatLonForm({ getFoodTrucks }){
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("null")

  const formRef = useRef()
  const inputLatRef = useRef()
  const inputLonRef = useRef()

  function handleSubmit(e){
    e.preventDefault()

    const latitude = parseFloat(inputLatRef.current.value)
    const longitude = parseFloat(inputLonRef.current.value)

    if(latitude && longitude)
      getFoodTrucks(latitude, longitude)
  }

  function handleLatChange(e){
    const value = e.target.value
    setLatitude(value)
    if(value && isNaN(parseFloat(value))){
      inputLatRef.current.parentNode.setAttribute("data-error", "true")
    }else{
      inputLatRef.current.parentNode.setAttribute("data-error", "false")
    }

    if(value)
      inputLatRef.current.parentNode.setAttribute("data-value", value)
    else
      inputLatRef.current.parentNode.removeAttribute("data-value")
  }

  function handleLonChange(e){
    const value = e.target.value
    setLongitude(value)
    if(value && isNaN(parseFloat(value)))
      inputLonRef.current.parentNode.setAttribute("data-error", "true")
    else
      inputLonRef.current.parentNode.setAttribute("data-error", "false")
    
    if(value)
      inputLonRef.current.parentNode.setAttribute("data-value", value)
    else
      inputLonRef.current.parentNode.removeAttribute("data-value")
  }

  return <>
    <form onSubmit = {handleSubmit} ref={formRef}>
      <div className="flex flex__form">
        <div className="form-field">
          <label htmlFor="latitudeInput">
            Latitude
          </label>
          <input
            id="latitudeInput"
            className="input__text"
            type="number"
            placeholder="Latitude"
            autoFocus
            name="latitude"
            value={latitude}
            ref = {inputLatRef}
            required

            onChange={handleLatChange}
            />
        </div>
        <div className="form-field">
          <label htmlFor="longitudeInput">
            Longitude
          </label>
          <input
            id="longitudeInput"
            className="input__text"
            type="number"
            placeholder="Longitude"
            name="longitude"
            value={longitude}
            ref = {inputLonRef}
            required
            
            onChange={handleLonChange}
          />
        </div>
        <button
          type="submit"
          className="button-main"
          style={{
            marginLeft: "14px",
            paddingTop: "4px",
            paddingBottom: "4px",
            height: "44px"
          }}
        >
          Submit
        </button>
      </div>
    </form>
  </>
}
export default LatLonForm