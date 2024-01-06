import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchDetails } from '../custom-hooks/useFetchDetails';
import styled from 'styled-components';
import { setRecipe } from '../redux/actions';



const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 0.5em 0;
`;


const StyledSubHeading = styled.h2`
  font-size: 1.5em;
  color: #ffb22d;
  margin: 0.25em 0;
`;


const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    position: relative;
    padding-left: 20px;
    &:before {
      content: '•';
      color: #ffb22d;
      position: absolute;
      left: 0;
    }
  }
`;

const StyledOl = styled.ol`
  counter-reset: list-counter;
  list-style: none;
  padding-left: 0;
  li {
    counter-increment: list-counter;
    position: relative;
    padding-left: 20px;
    &:before {
      content: counter(list-counter) '.';
      color: #ffb22d;
      position: absolute;
      left: 0;
    }
  }
`;


const StyledLi = styled.li`
  margin-bottom: 0.25em;
`;


const ImageContainer = styled.div`
  width: 100%;
  height: 300px; 
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (min-width: 768px) { 
    width: 50%;
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.048);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #fffa2d;
  width: 100%;
  padding: 20px;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px #fffb2d2b;
  }

  @media (min-width: 768px) { 
    width: 50%;
  }
`;

const StyledMain = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 1em;
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;


const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
  &:hover {
    text-decoration: none; 
  }
`;

function RecipeDetail() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const recipe = useSelector((state) => state.recipe);

  const { isLoading, error, data } = useFetchDetails(id);

  if (isLoading) return (
    <StyledMain>
        <StyledHeading>{recipe && recipe.title ? recipe.title : id}</StyledHeading>
        {recipe && <ImageContainer $imageUrl={recipe.image}> </ImageContainer>}
        <Container>
            Loading...
        </Container>
    </StyledMain>
  )
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Error: data not defined</div>;
  
  const ingredients = data && data.extendedIngredients && data.extendedIngredients.length > 0 ? data.extendedIngredients : [
    {'id': 101,},
    {'step' : "no ingredients indicated in the recipe"}
  ];

  const steps = data && data.analyzedInstructions && data.analyzedInstructions.length > 0 ? data.analyzedInstructions[0].steps : [
    {'number': 1,},
    {'step' : "no steps indicated in the recipe"}
  ];

  function handleClick(event) {
    event.preventDefault(); 
    dispatch(setRecipe(' '));
    navigate('/');
  }
  

  return (
    <StyledMain>
        <StyledHeading>{data.title}</StyledHeading>
        <ImageContainer $imageUrl={data.image}> </ImageContainer>
        <Container>
            <StyledSubHeading>Ingredients</StyledSubHeading>
            <StyledUl>
                {
                    ingredients && ingredients.map((ingredient) => (
                        <StyledLi key={ingredient.id+Math.random}>{ingredient.name}</StyledLi>
                    ))}
            </StyledUl>
        </Container>
        <Container>
            <StyledSubHeading>Preparation</StyledSubHeading>
            <StyledOl>
                {
                    steps && steps.map((step) => (
                        <StyledLi key={step.number}>{step.step}</StyledLi>
                    ))}
            </StyledOl>
        </Container>
        <StyledLink to={`/`} key={data.id} onClick={handleClick}>Back</StyledLink>

    </StyledMain>
  );
}

export default RecipeDetail;
