import React from 'react';
import CountUp from 'react-countup';
import './StatsCard.css';

const StatsCard = () => {
  return (
    <div className="stats-card">
      <div className="stat-item">
        <h3>Clients</h3>
        <p>
          <CountUp start={0} end={30} duration={2} separator="," />
        </p>
      </div>
      <div className="stat-item">
        <h3>Token Business Legalities</h3>
        <p>
          <CountUp start={0} end={300} duration={2} separator="," />
          <span>+</span>
        </p>
      </div>
      <div className="stat-item">
        <h3>Years of Journey</h3>
        <p>
          <CountUp start={0} end={8} duration={2} />
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
