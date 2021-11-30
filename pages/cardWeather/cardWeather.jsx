import React, { useEffect, useState } from "react";
import { CloudIcon, LightningBoltIcon, TrendingUpIcon  } from '@heroicons/react/solid'
import api from "../api/api";
import {useGeolocation} from 'react-use';

export default function CardWeather() {
  const location = useGeolocation();
  console.log(location.longitude);
  const [user, setUser] = useState();
  

  useEffect(() => {
    setTimeout(() => {
      api
      .get(`/weather?lat=${location.latitude}&lon=${location.longitude}&lang=pt_br&units=metric&appid=5c0be100150d01b142fa961f22fa1b37`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, 1000);
  }, [location.longitude, location.latitude]);


  return (
    <div className="flex flex-col items-center justify-center">
        <div className="grid overflow-hidden grid-cols-2 grid-rows-3 gap-5">
            <div className="flex flex-col items-center justify-center rounded-lg m-2 box row-span-3 col-start-1 hover:ring-4 hover:ring-yellow-100 bg-gradient-to-b from-yellow-200 to-yellow-400 p-10">
                <img 
                className="w-32"
                src={"http://openweathermap.org/img/wn/" + user?.weather[0].icon + "@2x.png"}
                />
                
                <div className="text-5xl mb-10 text-center">
                  <h1>{user?.weather[0].main}</h1>
                  <h1>{user?.main.temp}°</h1>
                  
                </div>

                <div className="text-center">
                    <a>From:</a>
                    <p className="text-2xl">{user?.name} - {user?.sys.country}</p>
                </div>

            </div>


            <div className="box row-start-1 col-start-2 p-5 m-2 rounded-lg hover:ring-4 hover:ring-blue-300 bg-gradient-to-b from-blue-500 to-blue-600 text-blue-100">
                <div className="flex">
                <LightningBoltIcon className="w-5"/>
                    Tempo                    
                </div>
                <ul className="mt-2">
                  <li className="text-red-300">Temp.Max - {user?.main.temp_max}°</li>
                  <li className="text-green-300">Temp.Min - {user?.main.temp_min}°</li>
                  <li>Humidade: {user?.main.humidity}%</li>
                </ul>
            </div>


            <div className="box row-start-2 col-start-2 p-5 m-2 rounded-lg hover:ring-4 hover:ring-blue-300 bg-gradient-to-b from-blue-500 to-blue-600 text-blue-100">
                <div className="flex">
                <CloudIcon className="w-5"/>
                    Ventos                    
                </div>
                <ul className="mt-3">
                  <li>Ventos: {user?.wind.speed} KM/h</li>
                  <li>Rajadas: {user?.wind.gust} KM/h</li>
                  <li>Direção: {user?.wind.deg}°</li>
                </ul>
                
            </div>


            <div className="box row-start-3 col-start-2 p-5 m-2 rounded-lg hover:ring-4 hover:ring-blue-300 bg-gradient-to-b from-blue-500 to-blue-600 text-blue-100">
                <div className="flex">
                <TrendingUpIcon className="w-5"/>
                    Status                    
                </div>
                <ul className="mt-3">
                  <li>Nascer do sol: {user?.sys.sunrise}</li>
                  <li>Pôr do sol: {user?.sys.sunset}</li>
                  <li>Pressão: {user?.main.pressure} hPa</li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
