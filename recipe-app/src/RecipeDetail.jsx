import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RecipeDetail() {
  let { id } = useParams();
  const recipe = useSelector((state) => state.recipe);


  return (
    <div>
      <h1>Recipe Detail for Recipe ID: {id}</h1>
      <p>{recipe.title}</p>
    </div>
  );
}

export default RecipeDetail;
