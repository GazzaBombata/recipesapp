import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setQuery } from './actions';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import RecipesList from './RecipesList';



const StyledForm = styled.form`
  
`;

const Input = styled.input`
  
`;

const Button = styled.button`
  display: none;
`;


function Form1() {
  const dispatch = useDispatch();
  const queryState = useSelector((state) => state.query);
  const [shouldShowRecipes, setShouldShowRecipes] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.inputName.value; 
    dispatch(setQuery(inputValue));
    setShouldShowRecipes(true);
  }

  return (
    <>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input type='text' name='inputName' required />
        <Button type='submit'>Submit</Button>
      </StyledForm>
      {/* {shouldShowRecipes && <RecipesList />} */}
    </>
  );
}

  
  export default Form1;
  