import styled from 'styled-components';
import React from 'react';
import Character from './Character';


const CharacterContainer = (props) => {
  
    return props.characters.map((character, idx) => {
        return <Character name={character.name} year={character.birth_year} />
    })


}

export default CharacterContainer