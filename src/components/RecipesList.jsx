import React from 'react';
import { useFetchRecipes } from '../custom-hooks/useFetchRecipes'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { setRecipe } from '../redux/actions';

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
  border-radius: 10px;
  box-shadow: 0 6px 12px #ffb22d78;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #fffa2d;
  height: 290px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px #ffb22d78(0, 0, 0, 0.15);
  }
`;

const CardHeading = styled.h3`
  color: #ffb22d;
  font-size: 1.2em;
  margin: 0;
  padding: 15px 15px 0px 15px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 230px; 
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-top: solid 1px #fffa2d;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none; 
  }
`;

function RecipesList() {
  const queryState = useSelector((state) => state.query);
  if (queryState == ' ') {return}

  const dispatch = useDispatch();
  const { isLoading, error, data } = useFetchRecipes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function handleClick(recipe) {
    dispatch(setRecipe(recipe))
  }

  if (!data) return null

  if (data.length === 0) {
    return(
      <div>
        <CardHeading>No results, try search again.</CardHeading>
      </div>
    );
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
