import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/actions';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



const StyledForm = styled.form`
  `;

const Input = styled.input`
  box-shadow: 0 6px 12px #ffb22d78(0, 0, 0, 0.15);
  width: 300px;
  border-radius: 10px;
  border: 1px solid #7e7e7e78;
  padding: 5px;
  outline-color: #fffa2d;

`;

const Button = styled.button`
  display: none;
`;


function Form1() {
  const dispatch = useDispatch();
  const queryState = useSelector((state) => state.query);
  const [inputValue, setInputValue] = useState(queryState)

  useEffect(() => {
    setInputValue(queryState)
  }, [queryState]);

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(setQuery(inputValue));
  }

  function handleInputChange (event) {
    setInputValue(event.target.value);
  }


  return (
    <>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input type='text' name='inputName' onChange = {handleInputChange} required value={inputValue}/>
        <Button type='submit'>Submit</Button>
      </StyledForm>
    </>
  );
}

  
  export default Form1;
  