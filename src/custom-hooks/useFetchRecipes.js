import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';



export const useFetchRecipes = () => {
  const query = useSelector((state) => state.query);
  const fetchURL = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=b6fa088f1b8b44fa89f2f895d3080a5c&query=${query}`;
  console.log('query:'+query)

  const { isLoading, error, data } = useQuery(['recipes', query], () => fetchData(fetchURL), {
    enabled: !!query,
  });

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }

  console.log('query:'+query)

  return { isLoading, error, data };
};
