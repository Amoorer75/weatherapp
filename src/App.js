import { useEffect, useState } from 'react';
import './App.css';
import { Mainpage } from './sevices/weathersevice';


function App() {
const [weathers,setWeathers] = useState([])
const [city, setCity] = useState([])


  useEffect(() => {
      const fetchData = async () => {
        try {
         const response = await Mainpage();

        setCity(response.city)

         setWeathers(response.list);
       
        } catch (error) {
            console.log(error);
          }
        }
    
    fetchData()
    
},[])

console.log(weathers)
console.log(city)

const fiveDayForcast = weathers.map((forcast,index) => {
  console.log('fiveDayForcast',forcast)

   if (forcast.dt_txt === "2022-08-28 00:00:00" ||forcast.dt_txt === "2022-08-29 00:00:00" ||forcast.dt_txt === "2022-08-30 00:00:00" ||forcast.dt_txt === "2022-08-31 00:00:00" ||forcast.dt_txt === "2022-09-01 00:00:00"){
  
  
  return(
    <li key={index} >
      <h3>{forcast.dt_txt}</h3>
      <p>{forcast.main.temp}°F</p>
      <p>{forcast.weather[0].main}</p>
    </li>
  )
  }


})



  return (
    <div className="App">
     
   <h1>{city.name}</h1>

    <ul>
   {fiveDayForcast}
   </ul>
    </div>
  );
}

export default App;
