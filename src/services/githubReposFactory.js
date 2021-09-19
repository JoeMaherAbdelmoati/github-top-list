import {ERRORS} from '../config/config'
export const getTopGithubReposData = (responseData) => {
  const response = {};
  if (responseData?.items?.length) {
    response.data = responseData.items;
  }
  return response;
};

export const getTopGithubReposError = (responseError) => {
  const response = {};
  if (responseError?.message.includes('exceeded')) {
    response.error = ERRORS.LIMIT;
  }
  if (responseError?.message.includes('1000')) {
    response.error = ERRORS.END;
  }
  return response;
};