import React from 'react';

export default (props) => {
  const metrics = props.metrics;

  return (
    <div className="c-features">
      <h2>Statistics</h2>
      <p>Here are some stats based on your top songs</p>
      <div className="c-features__feature">
        <p className="c-features__feature-title">Average Danceability</p>
        <p className="c-features__feature-value">{`${metrics.averageDanceability * 100} / 100`}</p>
      </div>
      <div className="c-features__feature">
        <p className="c-features__feature-title">Average Energy Rating</p>
        <p className="c-features__feature-value">{`${metrics.averageEnergy * 100} / 100`}</p>
      </div>
      <div className="c-features__feature">
        <p className="c-features__feature-title">Average Tempo</p>
        <p className="c-features__feature-value">{metrics.averageTempo}</p>
      </div>
      <div className="c-features__feature">
        <p className="c-features__feature-title">Average Song Duration</p>
        <p className="c-features__feature-value">{`${((metrics.averageDuration / 1000) / 60).toFixed(2)} Minutes`}</p>
      </div>
    </div>
  );
};