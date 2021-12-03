import React from 'react';
import '../styles/PassengersButton.css';

const PassengersButton = ({ onClick }) => {
  return (
    <div className='PassengerButton' onClick={onClick}>
      Select Passengers
    </div>
  );
};

export default PassengersButton;
