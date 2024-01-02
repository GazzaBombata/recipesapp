import React from 'react';
import { useFetchRecipes } from './useFetchRecipes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setRecipe } from './actions';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (min-width: 768px) { 
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid black;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeading = styled.h3`
  color: #333;
  font-size: 1.2em;
  margin: 0;
  padding: 15px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px; 
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none; // Removes underline from links
  color: inherit; // Inherits color from parent
  &:hover {
    text-decoration: none; // Optional: Removes underline on hover
  }
`;

function RecipesList() {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useFetchRecipes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function handleClick(recipe) {
    dispatch(setRecipe(recipe))
  }

  return (
    <div>
      <GridContainer>
        {data && data.map((recipe) => (
          <StyledLink to={`/recipe/${recipe.id}`} key={recipe.id} onClick={() => handleClick(recipe)}>
            <StyledCard>
              <CardHeading>{recipe.title}</CardHeading>
              <ImageContainer $imageUrl={recipe.image} />
            </StyledCard>
          </StyledLink>
      ))}
      </GridContainer>
    </div>
  );
}

export default RecipesList;
