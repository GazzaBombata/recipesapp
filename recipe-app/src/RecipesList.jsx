// RecipesList.jsx
import useSearch from './useSearch';

function RecipesList() {
  const { data, isLoading, error } = useSearch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && data.map((recipe) => (       
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
