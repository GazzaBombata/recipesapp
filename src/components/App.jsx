import './App.css';
import styled from 'styled-components';
import Form1 from './Form1.jsx'
import RecipesList from './RecipesList.jsx';

const RedHeading = styled.h1`
  color: #ffb22d;
  font-size: 50px;

  @media (min-width: 768px) { 
    font-size: 90px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) { 
    width: 800px;
  }
`;

function App() {


  return (
    <>
        <Container>
          <RedHeading>Search for a vegetarian recipe!</RedHeading>
          <Form1></Form1>
          <RecipesList></RecipesList>
        </Container>
    </>
  );
}

export default App;
