import React, { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { fetchTopGithubRepos } from "../services/githubRepos";
import RepoCard from "./RepoCard";
import { ERRORS } from "../config/config";
import { debounce } from "../utilities/helper";

const debounceLoadData = debounce(
  fn => {
    fn();
  },
  500,
  true
);

const RepoList = () => {
  const [repoData, setRepoData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getRepos = useCallback(() => {
    setIsLoading(true);
    fetchTopGithubRepos(page).then(response => {
      setIsLoading(false);
      const { data, error } = response;
      if (data) setRepoData([...repoData, ...data]);
      if (error) {
        setErrorMessage(error);
        setHasMore(false);
        if (error === ERRORS.LIMIT) {
          setTimeout(() => {
            setHasMore(true);
          }, 60000);
        }
      } else {
        if (errorMessage) setErrorMessage("");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  /*useEffect(() => {
    getRepos()
  }, []);*/
  useEffect(() => {
    getRepos();
  }, [page, getRepos]);
  const loadFunc = () => {
    if (hasMore && !isLoading) {
      debounceLoadData(() => setPage(page + 1));
    }
  };
  return (
    <>
      <InfiniteScroll
        loadMore={loadFunc}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {repoData.map(item => (
          <RepoCard key={item.name} item={item} />
        ))}
      </InfiniteScroll>
      {errorMessage && <h4>{errorMessage}</h4>}
    </>
  );
};
export default RepoList;
