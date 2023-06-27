import Link from "next/link";
async function fetchContents(repoName) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds

  const response = await fetch(
    `https://api.github.com/repos/theprakashkumar/${repoName}/contents`
  );
  const contents = await response.json();
  return contents;
}
const RepoDirs = async ({ name }) => {
  const contents = await fetchContents(name);
  const dirs = contents.filter((item) => item.type === "dir");

  return (
    <>
      <h3>Directories:</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default RepoDirs;
