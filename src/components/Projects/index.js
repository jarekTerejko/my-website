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
import {
  ButtonSmall,
  ButtonSmallRemove,
  ButtonSmallRemoveImgWrapper,
} from "../ButtonSmall/ButtonSmallEllement";
import { ImageEl } from "../Image/ImageElement";
import X from "../../images/x-remove-filter.svg";
import { FiltersWrapper } from "../FiltersWrapper/FiltersWrapperEl";

const Projects = ({
  portfolioProjects,
  filteredProjects,
  addFilter,
  removeFilter,
}) => {
  // console.log(filteredProjects);
  let filterArr;
  return (
    <>
      <ProjectsWrapper>
        <WrapperEl>
          {filteredProjects.length > 0 ? (
            <FiltersWrapper>
              {filteredProjects.map((project) => {
                return (
                  <ButtonSmallRemove key={project}>
                    <span style={{ paddingRight: "1rem" }}>{project}</span>
                    <ButtonSmallRemoveImgWrapper>
                      <ImageEl
                        style={{ cursor: "pointer" }}
                        src={X}
                        onClick={(e) => removeFilter(project)}
                      />
                    </ButtonSmallRemoveImgWrapper>
                  </ButtonSmallRemove>
                );
              })}
            </FiltersWrapper>
          ) : null}
        </WrapperEl>
        <WrapperEl>
          {filteredProjects.length === 0
            ? portfolioProjects.map((project, i) => {
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
                      <DescriptionText>
                        {project.descriptionShort}
                      </DescriptionText>
                      <DescriptionText style={{ marginBottom: "1rem" }}>
                        {project.languages.map((lang, i, arr) => {
                          return (
                            <ButtonSmall
                              key={lang}
                              onClick={(e) => addFilter(e)}
                            >
                              {lang.toUpperCase()}
                            </ButtonSmall>
                          );
                        })}
                      </DescriptionText>
                      <DescriptionText>
                        {project.tools.map((tool, i, arr) => {
                          return (
                            <ButtonSmall
                              key={tool}
                              onClick={(e) => addFilter(e)}
                            >
                              {tool}
                            </ButtonSmall>
                          );
                        })}
                      </DescriptionText>
                      <LinkR to={`/project/${i + 1}`}>View Project</LinkR>
                    </ProjectsColRight>
                  </ProjectsCols>
                );
              })
            : portfolioProjects.map((project, i) => {
                filterArr = [...project.languages, ...project.tools].map((f) =>
                  f.toLowerCase()
                );
                if (filteredProjects.every((f) => filterArr.includes(f))) {
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
                        <DescriptionText>
                          {project.descriptionShort}
                        </DescriptionText>
                        <DescriptionText style={{ marginBottom: "1rem" }}>
                          {project.languages.map((lang, i, arr) => {
                            return (
                              <ButtonSmall
                                key={lang}
                                onClick={(e) => addFilter(e)}
                              >
                                {lang.toUpperCase()}
                              </ButtonSmall>
                            );
                          })}
                        </DescriptionText>
                        <DescriptionText>
                          {project.tools.map((tool, i, arr) => {
                            return (
                              <ButtonSmall
                                key={tool}
                                onClick={(e) => addFilter(e)}
                              >
                                {tool}
                              </ButtonSmall>
                            );
                          })}
                        </DescriptionText>
                        <LinkR to={`/project/${i + 1}`}>View Project</LinkR>
                      </ProjectsColRight>
                    </ProjectsCols>
                  );
                }
              })}
        </WrapperEl>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
