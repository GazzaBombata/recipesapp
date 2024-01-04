import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';



export const useFetchDetails = (id) => {
  const fetchURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b6fa088f1b8b44fa89f2f895d3080a5c&includeNutrition=false`;
  console.log(fetchURL)

  const { isLoading, error, data } = useQuery(['recipeDetails', id], () => fetchData(fetchURL), {
    enabled: !!id,
  });

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  return { isLoading, error, data };
};
