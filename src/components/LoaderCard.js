import React from "react";
// Styles
import styled from "styled-components";

const LoaderCard = ({ onClick, name }) => {
    return (
        <Loader onClick={() => onClick()}>
            <span>{`Load more ${name} games`}</span>
        </Loader>
    )
}

const Loader = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  margin: 4rem auto 0 auto;
  font-size: 1.35rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.15s linear;
  font-weight: 300;
  outline: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.25rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.cardBg};
  
  &:hover {
    background-color: ${props => props.theme.colors.bcButton};
    color: #E8E8E8;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
  
  @media screen and (max-width: 768px) {
    margin: 2rem auto 0 auto;
    width: 100%;
  }
`

export default LoaderCard