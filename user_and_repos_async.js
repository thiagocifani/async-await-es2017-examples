//Http made in a sequence way, not parallel

const fetch = require('node-fetch');

async function fetchFromGitHub(endpoint) {
  const url      = `https://api.github.com${endpoint}`;
  const response = await fetch(url);

  return await response.json();
};

async function showUserAndRepos(handle) {
  const user  = await fetchFromGitHub(`/users/${handle}`);
  const repos = await fetchFromGitHub(`/users/${handle}/repos`);

  console.log(user.name);

  console.log(`${repos.length} repos`);
};


showUserAndRepos('thiagocifani');
