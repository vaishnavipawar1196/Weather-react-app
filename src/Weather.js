import React, { useEffect, useState } from "react";

function Weather() {

  const [city,setCity] = useState(null);
  const [search,setSearch] = useState("Kolhapur");

  useEffect( () => {
    const fetchApi = async () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2b638600582f8ed6de87d9455e5de8ab`;
        const response = await fetch(url);
        const resJson = await response.json();
        console.log(resJson);
        setCity(resJson.main);
    };

    fetchApi();
  },[search]);


  return (
    <div className="Weather">

      <input 
        type="search" 
        placeholder="Search here" 
        onChange={(event) => {setSearch(event.target.value)}}
        value={search}
       />

       {!city ? (<p className="tempt">No data found!</p>) :
        <div className="info">
          <div className="street">
                <i className='fas fa-street-view' style={{marginRight:'25px'}}></i>{search}
            </div>

            <div className="tempt">
                <h2>{city.temp}°C</h2>
            </div>

            <div className="min_max">
                <h2>min: {city.temp_min}°C | max: {city.temp_max}°C</h2>
            </div>
        </div>
      }
    </div>
  );
};

export default Weather;
