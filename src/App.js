import './App.css';
import React, { useState, useEffect } from "react";
import BotSpecs from './BotSpecs';
import BotArmy from './BotArmy'; 

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots") 
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Bot Collection</h1>
      <BotSpecs />
      <BotArmy bots={bots} />
    </div>
  );
}

export default App;
