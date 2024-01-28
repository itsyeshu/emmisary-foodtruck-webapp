import { useState, useEffect } from "react"

function useGeoLocation(callback){
  const [isLocationRequested, setIsLocationRequested] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState(null)

  function setLatLon(location){
    callback(location.coords.latitude, location.coords.longitude)
  }

  function setErrors(error){
    if(error.code === error.PERMISSION_DENIED){
      setLocationError("Permission denied by user")
    }else if(error.code === error.POSITION_UNAVAILABLE){
      setLocationError("Unable to access user-location")
    }else if(error.code === error.TIMEOUT){
      setLocationError("Request timed-out! Please retry")
    }else{
      setLocationError("Unknown error occured")
    }
  }

  useEffect(() => {
    console.log("Here")
    if(isLocationRequested){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(setLatLon, setErrors)
      }else{
        setLocationError("Browser doesnot support this feature")
      }
      setIsLocationLoading(false)
      setIsLocationRequested(false)
    }
  }, [isLocationRequested])

  return {
    isLocationLoading, locationError, setIsLocationRequested, isLocationRequested
  }
}

export default useGeoLocation