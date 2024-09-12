import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  margin-top: 10px;
  display: inline-block;
  width: 200px;
  margin-left: 20px;
`;

const ButtonStyled = styled.button`
  font-size: 18px;
  font-family: 'Poppins';
  color: white;
  width: 189px;
  min-height: 41px;
  max-width: 189px;
  border-radius: 5px;
  background: #375C67;
  border: 1.25px solid #73C7BE;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;

  
  &:hover {
    background-color: #0A3E5A;
  }
  
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    
  }
`;

export const CustomButton = ({ label, callBack }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleClick = () => {
    let response = callBack();
    console.log("Callback response: ", response);

    setSelectedValue(response || label);
  };

  return (
    <ButtonContainer>
      <ButtonStyled onClick={handleClick}>
        <span className="title">{selectedValue ? `  ${selectedValue}` : label}</span>
      </ButtonStyled>
    </ButtonContainer>
  );
};