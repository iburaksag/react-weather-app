import React from 'react'

const City = ({city}) => {
    console.log(city);
  return (
    <div className="w-[350px] rounded-md shadow mx-auto">
      <h1 className="text-5xl font-bold mb-1">{city.main.temp} °C</h1>
      <h1 className="text-3xl font-semibold mb-1">{city.name}</h1>
      <h1 className="text-2xl mb-1">{city.weather[0].main}</h1>
    </div>
  );
}

export default City