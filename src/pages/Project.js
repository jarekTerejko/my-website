import { useParams } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";

const Project = () => {
  const { id } = useParams();
  return (
    <>
      <ProjectDetails idParam={id} />
    </>
  );
};

export default Project;
