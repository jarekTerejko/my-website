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
import { Tag } from "../Tag/TagElement";

const Projects = ({ portfolioProjects }) => {
  return (
    <ProjectsWrapper>
      <WrapperEl>
        {portfolioProjects.map((project, i) => {
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
                <DescriptionText style={{ marginBottom: "1rem" }}>
                  {project.languages.map((lang, i, arr) => {
                    return (
                      <Tag key={i}>
                        {lang.toUpperCase()}
                        {i + 1 < arr.length ? " / " : ""}
                      </Tag>
                    );
                  })}
                </DescriptionText>
                <DescriptionText>
                  {project.tools.map((tool, i, arr) => {
                    return (
                      <Tag key={i}>
                        {tool}
                        {i + 1 < arr.length ? " / " : ""}
                      </Tag>
                    );
                  })}
                </DescriptionText>
                <LinkR to={`/project/${i + 1}`}>View Project</LinkR>
              </ProjectsColRight>
            </ProjectsCols>
          );
        })}
      </WrapperEl>
    </ProjectsWrapper>
  );
};

export default Projects;
