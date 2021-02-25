import { dataProjects } from "../../data.js";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  ProjectsColLeft,
  ProjectsCols,
  ProjectsColRight,
  ProjectsWrapper,
} from "./ProjectsElements";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { LinkR } from "../Link/LinkElement.js";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <WrapperEl>
        {dataProjects.map((project, i, arr) => {
          return (
            <ProjectsCols key={i}>
              <ProjectsColLeft
                projectsBgImgD={project.images.img1}
                projectsBgImgT={project.images.img2}
                projectsBgImgM={project.images.img3}
              ></ProjectsColLeft>
              <ProjectsColRight>
                <HeadingSecondary marginBottom="4rem">
                  {project.title}
                </HeadingSecondary>
                <DescriptionText>{project.descriptionShort}</DescriptionText>
                <LinkR to={`/project/${project.id}`}>View Project</LinkR>
              </ProjectsColRight>
            </ProjectsCols>
          );
        })}
      </WrapperEl>
    </ProjectsWrapper>
  );
};

export default Projects;
