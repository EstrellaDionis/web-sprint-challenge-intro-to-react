import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import CharacterContainer from '../src/components/CharacterContainer'
import { data } from './mocks/handlers'
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
`

const App = () => {
  const [characters, setCharacters] = useState(data);
  console.log(data)
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => console.error(err));
  }, [])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterContainer className='container' characters={characters}/>
    </StyledApp>
  );
}

export default App;
