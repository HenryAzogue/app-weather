import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useWeather = () => {
  const [ weather, setWeather ] = useState({});
  
  useEffect( () => {
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=96de97801c8c491f17c0e2dffe6d85d5`)
        .then( res => setWeather(res.data));
    }
    navigator.geolocation.getCurrentPosition(success);
  },[]);

  return { weather };
}

export default useWeather;