import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';


async function useSearch() {
  const query = useSelector((state) => state.query);
  console.log(query)
  
  const apiKey = 'b6fa088f1b8b44fa89f2f895d3080a5c';
  const fetchURL = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${apiKey}&query=${query}`;

  const { isLoading, error, data } = useQuery(['recipes', query], () => fetchData(query), {
    enabled: !!query, // Only run this query if a query is provided
  });

  async function fetchData(query) {
    const response = await fetch(fetchURL);
    const data = await response.json();
    return data.results; // Assuming 'results' is the array you want to map over
  }

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    data.results
  );
}

export default useSearch;