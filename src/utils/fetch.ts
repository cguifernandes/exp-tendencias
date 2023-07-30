export const getData = async (url: string): Promise<any[]> => {
  const response = await fetch(`https://api.themoviedb.org/3/${url}`);

  const data = await response.json();

  return data.results || [];
};
