import React, { useState } from "react";
import "./Search.css";
import SearchItem from "./SearchItem";
import {getSearchResult} from "../../API/Index"

const Search = ({ setPlay , setAllTracks}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const searchQuery = e.target.value;
      setIsLoading(true);
        const searchResult = await getSearchResult(searchQuery);
        if(searchResult){
          setData(searchResult.tracks.items);
          setIsLoading(false)
          setShowData(true)
          setAllTracks(searchResult.tracks.items)
        }
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
