import './App.css';
import './index.css';
import { useEffect, useState } from 'react';

function App() {

  const [search, setsearch] = useState();
  const [data, setdata] = useState();

  const location = (event) => {
    setsearch(event.target.value);
  }

  useEffect ( ()=>{
    const fetchapi = async ()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=aed8565e851c15057d11e5dbf688b89e`;
      const response = await fetch(url);
      const weatherdata = await response.json();
      setdata(weatherdata.main);
    }

    fetchapi();
    
  }, [search] );

  return (
    <>
      <div className='container'>
        <div className='main'>

          <div className='input'>
            <input className='inputfield' type="search" placeholder='search' onChange={location} />
          </div>

          {!data ? (
            <p>No Data Found</p>
            ):

            (
              <div>
              <div className='bottom'>
    
                <h1 className='name'>{search}</h1>
                <div>
                  <h2 className='temp'>{data.temp} °c</h2>
                </div>
                <h3 className='max-min'>Min : {data.temp_min} °c |  Max : {data.temp_max} °c</h3>
                <div className='pressure'>
                  <div>Pressure : {data.pressure} Pa </div>
                  <div>Humidity : {data.humidity} </div>
                </div>
    
              </div>
    
              <div className='wave -one'></div>
              <div className='wave -two'></div>
              </div>
            )

          }


        </div>

      </div>
    </>
  );
}

export default App;
