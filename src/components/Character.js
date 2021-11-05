// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const StyledFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 8px auto;
    border: 1px solid green;
    padding: 5%;
    background-color: rgba(0, 0, 0, .5) ;
`

const StyledCharacter = styled.p`
    align-items: flex-start;
`

const StyledButton = styled.button`
    display: inline-block;
    height: 25px;
    align-items: flex-end;
    align-self: center;
`



function Character(props){ 
    

    return(
        <StyledFlexDiv>
            <StyledCharacter>{props.name}</StyledCharacter>
            <StyledButton>{props.year}</StyledButton>    
        </StyledFlexDiv>
    )
}

export default Character