export const cocktailOptions = {
  method: "GET",
  //   baseUrl: "",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //     "X-RapidAPI-Host": "www.thecocktaildb.com/api/json/v2/1/search.php/",
  //   },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  console.log(response.body);
  const data = await response.json();

  return data;
};
