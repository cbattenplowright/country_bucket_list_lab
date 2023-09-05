import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState(null);

  const loadData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const jsonData = await response.json();
    setCountries(jsonData);
    console.log("loaded data");
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Country Bucket List</h1>
    </div>
  );
}

export default App;
