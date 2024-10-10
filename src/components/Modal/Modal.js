import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

// More alerts
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px; /* Add padding for spacing */
`;

const ModalContainer = styled.div`
  background: ${(props) => (props.type === "error" ? "#d9534e" : "#5cb85c")};
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid ${(props) => (props.type === "error" ? "red" : "green")};
  width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* Media Queries for Responsiveness */

  /*Tablet */
  @media (max-width: 768px) {
    padding: 8px; /* Adjust padding for tablet */
    max-width: 80%; /* Limit width to 80% on tablets */
  }

  /*Mobile */
  @media (max-width: 480px) {
    padding: 5px; 
    max-width: 90%; 
  }
`;

// Close Icon
const CloseIcon = styled(RiCloseLine)`
  position: absolute;
  top: 30px; 
  right: 30px; 
  padding: 5px; 
  cursor: pointer; 
  font-size: 24px; 
  color: ${(props) => props.theme.colors.text}; 
  
  &:hover {
    color: black; 
  }
`;

const Modal = ({ message, onClose, type }) => {
  return (
    <ModalBackground>
      <ModalContainer type={type}>
        <CloseIcon type={type} onClick={onClose} />
        <h2>{type === "error" ? "Error" : "Success"}</h2>
        <p>{message}</p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
