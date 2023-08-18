import React from 'react';

function MissionCard({ date, name, status }) {
  return (
    <div className={`mission-card ${status}`}>
      <div className="mission-info">
        <p className="date">{date}</p>
        <p className="name"><h3>{name}</h3></p>
      </div>
      <button className="upload-button">Upload</button>
      <div className={`indicator ${status}-indicator`}></div>
    </div>
  );
}

export default MissionCard;
