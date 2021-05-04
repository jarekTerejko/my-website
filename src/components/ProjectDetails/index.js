import React, { useEffect, useState } from "react";
import { dataProjects } from "../../data";
import { ImageEl } from "../Image/ImageElement";
import NotFound from "../NotFound";
import ChevronLeft from "../../images/project/chevron-left.svg";
import ChevronRight from "../../images/project/chevron-right.svg";
import Check from "../../images/project/check.svg";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import {
  ProjectDetailsColLeft,
  ProjectDetailsColRight,
  ProjectDetailsCols,
  ProjectDetailsIntroBgImg,
  ProjectDetailsIntroText,
  ProjectDetailsWrapper,
  ProjectDetailsColLeftInner,
  ProjectDetailsLink,
  ProjectDetailsLinksWrapper,
  ProjectDetailsLinkLeftWrapper,
  ProjectDetailsLinkRightWrapper,
  ProjectDetailsLinkText,
  ProjectDetailsName,
  ProjectDetailsGoalsList,
  ProjectDetailsGoalsListItems,
} from "./ProjectDetailsElements";
import { WrapperEl } from "../Wrapper/WrapperElement";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { ButtonTransparent } from "../ButtonTransparent/ButtonTransparentElement";
import Question from "../SectionQuestion";
import { Tag } from "../Tag/TagElement";

const ProjectDetails = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(null);
  const [dataProject, setDataProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIndex(parseInt(id) - 1);
    setDataProject(dataProjects[parseInt(id) - 1]);
    setIsLoading(false);
    // return () => {
    //   cleanup
    // }
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return !dataProject ? (
    <NotFound />
  ) : (
    <ProjectDetailsWrapper>
      <WrapperEl>
        <ProjectDetailsIntroBgImg
          img4={dataProject.images.img4}
          img7={dataProject.images.img7}
          img8={dataProject.images.img8}
        />
        <ProjectDetailsCols>
          <ProjectDetailsColLeft>
            <ProjectDetailsColLeftInner>
              <HeadingSecondary marginBottom="3rem">
                {dataProject.title}
              </HeadingSecondary>
              <ProjectDetailsGoalsList>
                {dataProject.goals
                  ? dataProject.goals.map((goal) => {
                      return (
                        <ProjectDetailsGoalsListItems key={goal}>
                          <ImageEl
                            src={Check}
                            style={{ marginRight: ".8rem" }}
                            alt=""
                          />
                          {goal}
                        </ProjectDetailsGoalsListItems>
                      );
                    })
                  : null}
              </ProjectDetailsGoalsList>
              <DescriptionText style={{ marginBottom: "1rem" }}>
                {dataProject.languages.map((lang, i, arr) => {
                  return (
                    <Tag key={i}>
                      {lang.toUpperCase()}
                      {i + 1 < arr.length ? " / " : ""}
                    </Tag>
                  );
                })}
              </DescriptionText>
              <DescriptionText>
                {dataProject.tools.map((tool, i, arr) => {
                  return (
                    <Tag key={i}>
                      {tool}
                      {i + 1 < arr.length ? " / " : ""}
                    </Tag>
                  );
                })}
              </DescriptionText>
              <ButtonTransparent
                as="a"
                target="_blank"
                href={dataProject.gitHubUrl}
              >
                Github
              </ButtonTransparent>
            </ProjectDetailsColLeftInner>
          </ProjectDetailsColLeft>
          <ProjectDetailsColRight>
            <ProjectDetailsIntroText style={{ marginBottom: "4rem" }}>
              Opis
            </ProjectDetailsIntroText>
            <DescriptionText>{dataProject.descriptionLong}</DescriptionText>
            <ButtonTransparent
              as="a"
              target="_blank"
              href={dataProject.siteUrl}
              style={{ marginBottom: "4rem" }}
            >
              Odwiedź
            </ButtonTransparent>
            <ProjectDetailsIntroText style={{ marginBottom: "4rem" }}>
              Podgląd
            </ProjectDetailsIntroText>
            <ImageEl
              src={dataProject.images.img5}
              style={{ marginBottom: "3rem" }}
            />
            <ImageEl
              src={dataProject.images.img6}
              style={{ marginBottom: "6.5rem" }}
            />
          </ProjectDetailsColRight>
        </ProjectDetailsCols>
        <ProjectDetailsLinksWrapper>
          <ProjectDetailsLinkLeftWrapper>
            <ProjectDetailsLink
              to={`/project/${
                index === 0 ? `${dataProjects.length}` : `${index}`
              }`}
            >
              <ImageEl style={{ marginRight: "1rem" }} src={ChevronLeft} />
              <div>
                <ProjectDetailsName style={{ marginBottom: ".5rem" }}>
                  {index === 0
                    ? `${dataProjects[dataProjects.length - 1].title}`
                    : `${dataProjects[index - 1].title}`}
                </ProjectDetailsName>
                <ProjectDetailsLinkText>
                  Previous project
                </ProjectDetailsLinkText>
              </div>
            </ProjectDetailsLink>
          </ProjectDetailsLinkLeftWrapper>
          <ProjectDetailsLinkRightWrapper>
            <ProjectDetailsLink
              to={`/project/${
                index === dataProjects.length - 1 ? "1" : `${index + 2}`
              }`}
            >
              <div style={{ textAlign: "right" }}>
                <ProjectDetailsName style={{ marginBottom: ".5rem" }}>
                  {index === dataProjects.length - 1
                    ? `${dataProjects[0].title}`
                    : `${dataProjects[index + 1].title}`}
                </ProjectDetailsName>
                <ProjectDetailsLinkText>Next project</ProjectDetailsLinkText>
              </div>
              <ImageEl style={{ marginLeft: "1rem" }} src={ChevronRight} />
            </ProjectDetailsLink>
          </ProjectDetailsLinkRightWrapper>
        </ProjectDetailsLinksWrapper>
        <Question />
      </WrapperEl>
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
