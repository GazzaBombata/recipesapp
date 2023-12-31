import { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Form1 from './Form1.jsx'

const RedHeading = styled.h1`
  color: red;
`;

function App() {

  return (
    <>
        <div>
          <RedHeading>Hello React</RedHeading>
          <Form1></Form1>
        </div>
    </>
  );
}

export default App;
