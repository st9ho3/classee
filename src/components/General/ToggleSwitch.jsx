import React from 'react';


const ToggleSwitch = ({ value, onChange }) => {
  const switchOn = () => {
    onChange(!value);
  };

  return (
    <div className="toggle-switch" onClick={switchOn}>
      <div className={`switch ${value ? 'on' : ''}`}>
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;