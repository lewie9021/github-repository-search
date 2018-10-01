const GITHUB_BASE_URL = "https://api.github.com";

export const fetchRepositories = (searchText) => {
  return fetch(`${GITHUB_BASE_URL}/search/repositories?q=${searchText}&sort=stars&order=desc`)
    .then((res) => res.json());
}

export const fetchRepository = (userId, repoId) => {
  const tasks = [
    fetch(`${GITHUB_BASE_URL}/repos/${userId}/${repoId}`)
      .then((res) => res.json()),
    fetch(`${GITHUB_BASE_URL}/repos/${userId}/${repoId}/readme`)
      .then((res) => res.json())
  ];

  return Promise.all(tasks)
    .then(([repository, readme]) => {
      return {
        id: repository.id,
        name: repository.name,
        fullName: repository.full_name,
        owner: repository.owner,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
        issues: repository.open_issues_count,
        readme: readme.content ? atob(readme.content): ""
      }
    });
}