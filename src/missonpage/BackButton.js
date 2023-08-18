import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
      <button className="back-button" onClick={goBack}>뒤로가기</button>
  );
}

export default BackButton;
