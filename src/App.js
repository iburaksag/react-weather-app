import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const key = "be6d818047c78b5f5e107395caded94d";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]); 
  
  return (
    <div className="App">
      <div class="mb-3 pt-0">
        <h1 className="mb-3 text-3xl">CITY</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="px-3 py-3 mb-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
