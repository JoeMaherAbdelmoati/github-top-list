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
    response.error = 'Too many requests, please wait and try again';
  }
  if (responseError?.message.includes('1000')) {
    response.error = 'End of data.';
  }
  return response;
};