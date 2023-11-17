import React, { useState, useEffect } from 'react';
import BotArmy from './BotArmy';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    // enlisting functionality
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id} onClick={() => enlistBot(bot)}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
          </li>
        ))}
      </ul>
      <BotArmy bots={enlistedBots} />
    </div>
  );
};

export default BotCollection;
