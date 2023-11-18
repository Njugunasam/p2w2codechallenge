import React, { useState, useEffect } from 'react';
import BotArmy from './BotArmy';
import './App.css';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(eb => eb.id !== bot.id));
  };

  return (
    <div>
      <BotArmy bots={enlistedBots} enlistBot={enlistBot} releaseBot={releaseBot} />
      <ul className="bot-container">
        {bots.map(bot => (
          <li key={bot.id}>
            <div className="bot-card" onClick={() => enlistBot(bot)}>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <img className="bot-avatar" src={bot.avatar_url} alt={`${bot.name} Avatar`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;