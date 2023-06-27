const fetchRepo = async (repoName) => {
  const response = await fetch(
    `https://api.github.com/repos/theprakashkumar/${repoName}`
  );
  const repo = await response.json();
  console.log(repo);

  return repo;
};
const Repo = async ({ repoName }) => {
  const repo = await fetchRepo(repoName);
  return <div>{repo.name}</div>;
};

export default Repo;
