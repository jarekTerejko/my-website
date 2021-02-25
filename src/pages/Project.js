import { useParams } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";

const Project = () => {
  const { id } = useParams();
  return (
    <div>
      {/* <h1>{id}</h1> */}
      <ProjectDetails idParam={id} />
    </div>
  );
};

export default Project;
