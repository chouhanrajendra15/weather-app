import React,{useState} from 'react'
import axios  from 'axios';
import ShowTemp from './Components/ShowTemp';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description:"",
    temp:0,
    temp_max:0,
    temp_min:0,
    humidity:0,
    country:"",

  })
  const handleclick =() =>{
   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d7d2e4095990298f2f2fbad74a408952`)
   .then((response)=>{
    console.log(response.data)
    setData({
      description:response.data.weather[0].description,
      temp:response.data.main.temp,
      temp_max:response.data.main.temp_max,
      temp_min:response.data.main.temp_min,
      humidity:response.data.main.humidity,
      country:response.data.sys.country,
      sunrise:response.data.main.sunrise,
    })
   })
  }
  return (
    <>
    <div className='container text-center my-8'>
      <h1>Weather App</h1>
      <input type="text" className='from-control my-3' value = {city} onChange ={(e)=>{
        setCity(e.target.value);
      }} />
      <button className='btn btn-danger mx-3 style={{ background-color: antiquewhite}}' type="submit" onClick={handleclick}>Get Temp</button>
 
    </div> 
  <ShowTemp text={data} />


</>
  )
}

export default App
