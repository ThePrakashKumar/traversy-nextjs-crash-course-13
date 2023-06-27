import Link from "next/link";

const fetchRepos = async () => {
  const response = await fetch(
    "https://api.github.com/users/theprakashkumar/repos"
  );

  // wait for one second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos[0].name);
  return (
    <div>
      <h1>RepoPage</h1>
      <div className="repos-container">
        {repos.map((repo) => (
          <div className="repo-list">
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <div className="repo-details">{repo.description}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
