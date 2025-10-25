import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "test1", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project </button>
    </div>
  );
}

export default ClientProjectsPage;
