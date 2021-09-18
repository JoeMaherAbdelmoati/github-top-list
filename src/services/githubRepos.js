import format from 'date-fns/format'
import {getTopGithubReposData, getTopGithubReposError} from "./githubReposFactory";
import {httpCall} from "../utilities/httpCall";
import {GITHUB_BASEURL} from '../config/config'


export const fetchTopGithubRepos = (page = 1) => {
  // example q=created:>2021-08-18&sort=stars&order=desc
  // created changed because the requirement is get last 30 days
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  const created = format(date, 'yyyy-MM-dd');
  const data = {
    q: `created:>${created}`,
    sort: 'stars',
    order: 'desc',
    page,
  };
  return httpCall({
    params: data,
    baseURL: GITHUB_BASEURL,
    url: 'search/repositories',
  }).then((response) => {
    return getTopGithubReposData(response.data);
  }).catch(error => {
    return getTopGithubReposError(error.response.data)
  })
};