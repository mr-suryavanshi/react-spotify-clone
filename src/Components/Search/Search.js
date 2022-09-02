import React, { useState } from "react";
// import { getSearchResult } from "../../API/Index";
import "./Search.css";
import SearchItem from "./SearchItem";
const Search = ({ play, setPlay , setAllTracks}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      // console.log(e.target.value);
      const searchQuery = e.target.value;
      setIsLoading(true);
      // const getSearchData = await getSearchResult(searchQuery);
      // setData(getSearchData);
      // getSearchData?.lenght > 0 ? setIsLoading(false) : setIsLoading(true);
      // console.log(getSearchData);
      const url = `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${searchQuery}&limit=3`;
      const token = process.env.REACT_APP_ACCESS_TOKEN;
      // console.log("token", token);
      fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setIsLoading(false);
          setData(data.tracks.items);
          setShowData(true);
          setAllTracks(data.tracks.items);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="search"
          placeholder="Search for artists, music and genres..."
          className="input-box"
          onKeyPress={handleKeyDown}
        ></input>
        <div className="search-result">
          {showData ? (
            isLoading ? (
              <h1>...Loading</h1>
            ) : (
              // data?.map((song) => {
              //   <div>
              //     <h1>{song.track}</h1>
              //     <h1>{song.artist}</h1>
              //   </div>;
              // })
              <div></div>
            )
          ) : (
            <div></div>
          )}
          <div className="search-top">
            <div className="search-card">
              {!isLoading && (
                <>
                  <div className="search-top-header">Top results</div>
                  <img src={data[0]?.album?.images?.[0].url} alt=""></img>
                  <div className="search-bottom-header">Songs</div>
                </>
              )}
            </div>
          </div>
          <div className="search-bottom">
            <div className="search-content">
              {data?.map((item) => {
                return <SearchItem data={item} setPlay={setPlay} key = {item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
