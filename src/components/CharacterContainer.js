import styled from 'styled-components';
import React from 'react';
import Character from './Character';

const StyledCharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 100%;
    height: 75%;
    
`

const CharacterContainer = (props) => {

    return <StyledCharacterContainer>
        {props.characters.map((character, idx) => {
        return <Character name={character.name} year={character.birth_year} />
    })}
         </StyledCharacterContainer>
}

export default CharacterContainer