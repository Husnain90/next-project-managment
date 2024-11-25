import AddClientModal from "@/components/AddClientModal";
import AddProjectModal from "@/components/AddProjectModal";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className=" mx-36 mt-5 flex  flex-row gap-2">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <div className=" mx-36 mt-5 flex  flex-col gap-2">
        <Projects />
        <hr />
        <Clients />
      </div>
    </div>
  );
}
