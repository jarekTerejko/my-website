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
import { ButtonTransparent } from "../ButtonTransparent/ButtonTransparentElement";

const Projects = ({
  portfolioProjects,
  filteredProjects,
  addFilter,
  removeFilter,
}) => {
  
  let filterArr;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [filteredProjects]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.6, duration: 0.5 },
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
            {console.log(portfolioProjects)}
            {filteredProjects.length === 0
              ? portfolioProjects.map((project, i) => {
                  return (
                    <ProjectsCols
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      key={i}
                      id={project.id}
                    >
                      <ProjectsColLeft
                        projectsBgImgD={project.images.img1}
                        projectsBgImgT={project.images.img2}
                        projectsBgImgM={project.images.img3}
                      ></ProjectsColLeft>
                      <ProjectsColRight>
                        <HeadingSecondary marginBottom="4rem">
                          {`${i + 1}. ${project.title}`}
                        </HeadingSecondary>
                        <DescriptionText>
                          {project.descriptionShort}
                        </DescriptionText>
                        <LinkR
                          to={`/project/${i + 1}`}
                          style={{
                            margin: "0 1rem 4rem 0",
                            padding: "1.5rem 0",
                            width: "16rem",
                            textAlign: "center",
                          }}
                          $darkBg
                        >
                          Więcej
                        </LinkR>
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
                        <ButtonTransparent
                          as="a"
                          target="_blank"
                          href={project.gitHubUrl}
                          style={{
                            margin: "0 1rem 1rem 0",
                            padding: "1.5rem 0",
                            width: "16rem",
                            textAlign: "center",
                          }}
                        >
                          Github
                        </ButtonTransparent>
                        <ButtonTransparent
                          as="a"
                          target="_blank"
                          href={project.siteUrl}
                          style={{
                            margin: "0 1rem 1rem 0",
                            padding: "1.5rem 0",
                            width: "16rem",
                            textAlign: "center",
                          }}
                        >
                          Odwiedź
                        </ButtonTransparent>
                      </ProjectsColRight>
                    </ProjectsCols>
                  );
                })
              : portfolioProjects.map((project, i) => {
                  filterArr = [...project.languages, ...project.tools].map(
                    (f) => f.toLowerCase()
                  );
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
                          <LinkR
                            to={`/project/${i + 1}`}
                            style={{
                              margin: "0 1rem 4rem 0",
                              padding: "1.5rem 0",
                              width: "16rem",
                              textAlign: "center",
                            }}
                            $darkBg
                          >
                            Więcej
                          </LinkR>
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
                          <LinkR
                            to={`/project/${i + 1}`}
                            style={{
                              margin: "0 1rem 1rem 0",
                              padding: "1.5rem 0",
                              width: "16rem",
                              textAlign: "center",
                            }}
                          >
                            Więcej
                          </LinkR>
                          <ButtonTransparent
                            as="a"
                            target="_blank"
                            href={project.gitHubUrl}
                            style={{
                              margin: "0 1rem 1rem 0",
                              padding: "1.5rem 0",
                              width: "16rem",
                              textAlign: "center",
                            }}
                          >
                            Github
                          </ButtonTransparent>
                          <ButtonTransparent
                            as="a"
                            target="_blank"
                            href={project.siteUrl}
                            style={{
                              margin: "0 1rem 1rem 0",
                              padding: "1.5rem 0",
                              width: "16rem",
                              textAlign: "center",
                            }}
                          >
                            Odwiedź
                          </ButtonTransparent>
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
