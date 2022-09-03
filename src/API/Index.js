import axios from "axios";

const getSearchResult = async (searchQuery) => {
  const url = `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${searchQuery}&limit=3`;
  const token = await getToken();
  const response = await axios(url, {
    headers : {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  return response.data;
};

const getToken =  async () => {
  const hash = window.location.hash
  let token = window.localStorage.getItem("token")

  if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
  }
  return token;
}

const getProfile = async () => {
  getToken();
  const url = `https://api.spotify.com/v1/me`;
  const token = await getToken();
  const response = await axios(url, {
    headers : {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  return response.data;
};

const getPlaylist = async () =>{
  const url = `	https://api.spotify.com/v1/browse/featured-playlists?limit=8`;
  const token = await getToken();
  const response = await axios(url, {
    headers : {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  return response.data;
}

const getDashboardPlaylist = async () =>{
  const url = `	https://api.spotify.com/v1/browse/featured-playlists?limit=4`;
  const token = await getToken();
  const response = await axios(url, {
    headers : {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  return response.data;
} 


export { getSearchResult, getProfile, getPlaylist, getDashboardPlaylist, getToken};


