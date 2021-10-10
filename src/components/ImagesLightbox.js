import React from "react";
import {smallImage} from "../utils/mediaResize";
import {SRLWrapper} from "simple-react-lightbox";
import styled from "styled-components";

const ImagesLightbox = ({ screenshots, gameName }) => {
    const options = {
        settings: {
            lightboxTransitionSpeed: .1,
            slideTransitionSpeed: .1,
        },

        buttons: {
            iconPadding: '1rem',
            size: '4rem',
            showThumbnailsButton: false,
            showAutoplayButton: false,
            showDownloadButton: false,
        },

        caption: {
            showCaption: false,
        },
    }

    return (
        <SRLWrapper options={options}>
            <Gallery>
                {screenshots.map(screen => (
                    <a href={screen.image}>
                        <div>
                            <img
                                src={smallImage(screen.image, 1280)}
                                key={screen.id}
                                alt={gameName}
                                id={screen.id}
                            />
                        </div>
                    </a>
                ))}
            </Gallery>
        </SRLWrapper>
    )
}

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  a {
    display: block;
    width: 50%;
    padding-bottom: 0.5rem;
  }
  
  div {
    width: 14.5rem;
    height: 10rem;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
  
  @media (max-width: 1280px) {
    flex-direction: column;
    
    div {
      width: 12rem;
      height: 8rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    
    a {
      width: 100%;
    }
    
    div {
      width: 100%;
      height: 100%;
    }
  }
`

export default ImagesLightbox