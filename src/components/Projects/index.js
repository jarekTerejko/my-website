import { useEffect } from "react";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  ProjectsColLeft,
  ProjectsCols,
  ProjectsColRight,
  ProjectsWrapper,
  ProjectsInnerWrapper,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredProjects]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 0.5 },
    },
  };

  return (
    <>
      <ProjectsWrapper>
        <WrapperEl>
          {filteredProjects.length > 0 ? (
            <FiltersWrapper
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
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
          <ProjectsInnerWrapper>
            {filteredProjects.length === 0
              ? portfolioProjects.map((project, i) => {
                  return (
                    <ProjectsCols
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      key={i}
                    >
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
                        <LinkR to={`/project/${i + 1}`}>Więcej</LinkR>
                      </ProjectsColRight>
                    </ProjectsCols>
                  );
                })
              : portfolioProjects.map((project, i) => {
                  filterArr = [
                    ...project.languages,
                    ...project.tools,
                  ].map((f) => f.toLowerCase());
                  if (filteredProjects.every((f) => filterArr.includes(f))) {
                    return (
                      <ProjectsCols
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={i}
                      >
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
                          <LinkR to={`/project/${i + 1}`}>Więcej</LinkR>
                        </ProjectsColRight>
                      </ProjectsCols>
                    );
                  }
                  return null;
                })}
          </ProjectsInnerWrapper>
        </WrapperEl>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
