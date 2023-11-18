import React from 'react';

const BotArmy = ({ bots,
  releaseBot, }) => {
  return (
    <div>
      <ul className="bot-container">
        {bots.map(bot => (
          <li key={bot.id}>
            <div className="bot-card" onClick={() => releaseBot(bot)}>
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <img className="bot-avatar" src={bot.avatar_url} alt={`${bot.name} Avatar`} />
              <button className="delete-button" disabled>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotArmy;
