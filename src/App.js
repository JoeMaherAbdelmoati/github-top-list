import React from "react";
import "./style/style.scss";
import RepoList from './components/RepoList'

function App() {

  return (
    <div className={"container-fluid"}>
      <div className={"row my-3"}>
        <RepoList/>
      </div>
    </div>
  );
}

export default App;
