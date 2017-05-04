const fetch = require('node-fetch');

const showGitHubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

showGitHubUser('thiagocifani')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  });
