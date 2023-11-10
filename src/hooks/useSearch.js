import { useState } from "react";
import { getSearchResults } from "../api/api";

export function useSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const actors = searchResults.filter(
    (searchResult) => !("year" in searchResult)
  );
  const movies = searchResults.filter((searchResult) => "year" in searchResult);

  const getResults = async (searchText) => {
    setIsLoading(true);
    if (searchText !== "") {
      try {
        const results = await getSearchResults(searchText);
        setSearchResults(results);
      } catch (error) {
        setError(error);
      }
    }
    setIsLoading(false);
  };
  return {
    getResults,
    data: searchResults,
    isLoading,
    error
  };
}
