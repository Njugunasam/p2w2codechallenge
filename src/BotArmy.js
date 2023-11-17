import React from 'react';

const BotArmy = ({ bots }) => {
  if (!bots) {
    return <p>No enlisted bots available.</p>;
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>{bot.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BotArmy;