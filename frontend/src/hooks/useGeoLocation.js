import { useState, useEffect } from "react"

function useGeoLocation(callback){
  const [isLocationRequested, setIsLocationRequested] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState(null)

  async function setLatLon(location){
    try{
      await callback(location.coords.latitude, location.coords.longitude)
      
      setIsLocationLoading(false)
      setIsLocationRequested(false)
    }catch (err){
      setLocationError(`Error : ${err.message}`)
    }
  }

  function setErrors(error){
    if(error.code === error.PERMISSION_DENIED){
      setLocationError("Location permission denied by user, please enable it from site-settings!")
    }else if(error.code === error.POSITION_UNAVAILABLE){
      setLocationError("Unable to access user-location")
    }else if(error.code === error.TIMEOUT){
      setLocationError("Request timed-out! Please retry")
    }else{
      setLocationError("Unknown error occured")
    }
  }

  useEffect(() => {
    if(isLocationRequested){
      setLocationError(null)
      setIsLocationLoading(true)
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(setLatLon, setErrors)
      }else{
        setLocationError("Browser doesnot support this feature")
      }
    }
  }, [isLocationRequested])

  return {
    isLocationLoading, locationError, setIsLocationRequested, isLocationRequested
  }
}

export default useGeoLocation