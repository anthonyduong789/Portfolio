import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ name, percentage }) => {
  return (
    <div className='progress_div'>
      <div class= "tech_label">{name}</div>
  
      <div className='progress-container'>
        <div className ="progress-bar" style={{ width: `${percentage}%` }}>
        </div>
      </div>
      <div class = "percentage">
        {percentage}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;

// ProgressBar.css
