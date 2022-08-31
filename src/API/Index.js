const getSearchResult = async ({ searchQuery }) => {
  const url = `https://api.spotify.com/v1/search?type=album&include_external=audio&q=${searchQuery}&limit=3`;
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  // console.log("token", token);
  const responce = await fetch(url, {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });
  const responseData = responce.json();
  console.log("search result", JSON.stringify(responseData));

  // .then((response) => response.json())
  // .then((data) => {
  //   console.log("search result", data);
  //   return data.albums.items;
  // })
  // .catch((error) => {
  //   return {
  //     data: [],
  //     error: error,
  //     loading: false,
  //   };
  // });
};

export { getSearchResult };
