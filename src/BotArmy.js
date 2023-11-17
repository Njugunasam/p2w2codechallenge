import React from 'react';

const BotArmy = ({ enlistedBots, releaseBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {enlistedBots.map(bot => (
          <li key={bot.id}>
            {bot.name} <button onClick={() => releaseBot(bot)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotArmy;