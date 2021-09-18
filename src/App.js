import React from 'react'
import './style/style.scss';
import {fetchTopGithubRepos} from "./services/githubRepos";

function App() {
  React.useEffect(() => {
    fetchTopGithubRepos(34).then((response) => {
      const {data, error} = response;
      console.log('data');
      console.log(data);
      console.log('error');
      console.log(error);
    });
  }, []);
  return (
    <></>
  );
}

export default App;
