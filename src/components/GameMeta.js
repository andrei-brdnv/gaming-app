import React, {useMemo} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import moment from "moment";
import metacriticBorder from "../utils/metacriticBorderStyle";

const GameMeta = ({ array, name, width, data, getStarsRating }) => {
    const showMetacriticBorder = useMemo(() => {
        if (name === "Metascore") {
            return metacriticBorder(data)
        }
    }, [data])

    return (
        <>
            {array && array.length || data ? (
                <Container width={width}>
                    <GameMetaTitle>
                        {name}
                    </GameMetaTitle>
                    <GameMetaText {...(name === "Rating" && {title: `Rating: ${data}`})}>
                        {array ?
                            array.map((data, i) => (
                                <>
                                    <Link
                                        {...(name === "Platforms" && {key: data.platform.id})}
                                        {...{key: data.id}}
                                    >
                                        {name === "Platforms" && data.platform.name || data.name}
                                    </Link>
                                    {i !== array.length - 1 ? ', ' : ''}
                                </>
                            )) : null}

                        {data ?
                            name === "Website" && (
                                <>
                                    <a href={`${data}`} target={'_blank'} rel={'noreferrer noopener'}>
                                        {data}
                                    </a>
                                </>
                            ) || (
                                name === "Release Date" && (
                                    moment(data).format('ll')
                                )
                            ) || (
                                name === "Metascore" &&
                                (
                                    <div className={`metacritic ${showMetacriticBorder}`} title={"Metascore"}>
                                        {data}
                                    </div>
                                )
                            ) || (
                                name === "Rating" && (
                                    getStarsRating(data)
                                )
                            ) || (
                                data.name
                            ) : null}
                    </GameMetaText>
                </Container>
            ) : null}
        </>
    )
}

const Container = styled.div`
  width: ${props => props.width || '50%'};
  
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  
  &:nth-child(odd) {
    padding-right: 1rem;
  }
`

const GameMetaTitle = styled.div`
  font-weight: 300;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.inputFont};
  opacity: 0.65;
`

const GameMetaText = styled.div`
  line-height: 1.5;
  color: ${props => props.theme.colors.font};
  
  a {
    text-decoration-line: underline;
    text-decoration-color: #9e9e9e;
    text-underline-offset: 2px;
    cursor: pointer;
    word-wrap: break-word;
  }

  a:hover {
    opacity: 0.75;
  }

  .metacritic {
    display: inline;
    font-weight: bold;
    opacity: 0.75;
  }

  .metacritic.green {
    border: 2px solid green;
    padding: 0.1rem 0.2rem;
  }

  .metacritic.yellow {
    border: 2px solid orange;
    padding: 0.1rem 0.2rem;
  }

  .metacritic.red {
    border: 2px solid red;
    padding: 0.1rem 0.2rem;
  }

  .metacritic.not-active {
    border: none;
  }
  
  svg {
    opacity: 0.75;
  }
  
`

export default GameMeta