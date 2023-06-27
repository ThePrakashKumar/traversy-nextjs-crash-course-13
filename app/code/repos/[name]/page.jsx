import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDir";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Suspense fallback={<div>{"loading repo..."}</div>}>
        <Repo repoName={name} />
      </Suspense>
      <Suspense fallback={<div>{"loading directory..."}</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
