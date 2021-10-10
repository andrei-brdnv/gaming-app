import React from "react";
// Styles
import styled from "styled-components";
import { Card } from "./GameCard";

const Skeleton = () => {
    return (
        <SkeletonContainer>
            <div className="skeleton">
                <img className="skeleton-img" />
                <div className="skeleton-icons" />
                <div className="skeleton-title" />
            </div>
            <div className="shimmer-wrapper">
                <div className="shimmer" />
            </div>
        </SkeletonContainer>
    )
}

const SkeletonContainer = styled(Card)`
  overflow: hidden;
  
  img {
    background: #B8B8B8;
  }

  .skeleton-icons {
    background: #B8B8B8;
    width: 25%;
    height: 1.118rem;
    margin: 1rem 1rem 0 1rem;
  }

  .skeleton-title {
    margin: 1rem;
    width: 50%;
    height: 1.5rem;
    background: #B8B8B8;
  }

  .shimmer-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 2.5s infinite;
  }

  .shimmer {
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 0 5rem 5rem rgba(255, 255, 255, 0.1);
  }

  @keyframes loading {
    0% {transform: translateX(-75%)}
    100% {transform: translateX(150%)}
  }
`

export default Skeleton