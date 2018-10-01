const GITHUB_BASE_URL = "https://api.github.com";

export const fetchRepositories = (searchText) => {
  return fetch(`${GITHUB_BASE_URL}/search/repositories?q=${searchText}&sort=stars&order=desc`)
    .then((res) => res.json());
}