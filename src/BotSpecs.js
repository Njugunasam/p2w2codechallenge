import React from 'react';

const BotSpecs = ({ bot, deleteBot }) => {
  return (
    <div>
      <h2>Bot Specifications</h2>
      <p>Name: {bot.name}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => deleteBot(bot)}>Delete</button>
    </div>
  );
};

export default BotSpecs;