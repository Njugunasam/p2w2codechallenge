import React from 'react';

const BotArmy = ({ bots }) => {
    return (
        <div>
            <h2>Bot Army</h2>
            <ul>
                {bots.map(bot => (
                    <li key={bot.id}>{bot.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BotArmy;