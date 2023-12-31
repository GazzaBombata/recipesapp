import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setQuery } from './actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
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
  // useEffect(() => {
  //   console.log('Updated query state:', queryState);
  // }, [queryState]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.inputName.value; 
    // console.log(inputValue)
    // console.log(queryState)
    dispatch(setQuery(inputValue));
    RecipesList(inputValue);
  }
  
    return (
      <>
        <StyledForm onSubmit={handleFormSubmit}>
          <Input type='text' name='inputName' required />
          <Button type='submit'>Submit</Button>
        </StyledForm>
      </>
    );
  }
  
  export default Form1;
  