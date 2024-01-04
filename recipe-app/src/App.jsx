import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Form1 from './Form1.jsx'
import RecipesList from './RecipesList';

const RedHeading = styled.h1`
  color: #ffb22d;
`;

function App() {

  return (
    <>
        <div>
          <RedHeading>Search for a vegetarian recipe!</RedHeading>
          <Form1></Form1>
          <RecipesList></RecipesList>
        </div>
    </>
  );
}

export default App;
