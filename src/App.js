import React from "react";
import "./style/style.scss";
import { fetchTopGithubRepos } from "./services/githubRepos";
import RepoCard from "./components/RepoCard";

function App() {
  const [repoData, setRepoData] = React.useState();
  React.useEffect(() => {
    fetchTopGithubRepos(1).then(response => {
      const { data, error } = response;
      if (data) setRepoData(data[0]);
      console.log("data");
      console.log(data);
      console.log("error");
      console.log(error);
    });
  }, []);
  return (
    <div className={"container-fluid"}>
      <div className={"row my-3"}>
        {repoData && <RepoCard item={repoData} />}
      </div>
    </div>
  );
}

export default App;
