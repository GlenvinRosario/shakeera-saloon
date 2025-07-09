import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button' }) => {
  return (
    <button className="book-now-button" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
