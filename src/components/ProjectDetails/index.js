import React, { useEffect, useState } from "react";
import { dataProjects } from "../../data";
import { ImageEl } from "../Image/ImageElement";
import NotFound from "../NotFound";
import ChevronLeft from "../../images/project/chevron-left.svg";
import ChevronRight from "../../images/project/chevron-right.svg";
import { useParams } from "react-router-dom";
import Loader from '../Loader';
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
} from "./ProjectDetailsElements";
import { WrapperEl } from "../Wrapper/WrapperElement";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { DescriptionText } from "../DecriptionText/DescriptionTextElement";
import { ButtonTransparent } from "../ButtonTransparent/ButtonTransparentElement";
import Question from '../SectionQuestion'

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    setIndex(parseInt(id) - 1);
    setDataProject(dataProjects[parseInt(id) - 1]);
    setLoading(false);
    // return () => {
    //   cleanup
    // }
  }, [id]);

  const [index, setIndex] = useState(null);
  const [dataProject, setDataProject] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader />;
  }

  return !dataProject ? (
    <NotFound />
  ) : (
    <ProjectDetailsWrapper>
      <WrapperEl>
        <ProjectDetailsIntroBgImg img4={dataProject.images.img4} />
        <ProjectDetailsCols>
          <ProjectDetailsColLeft>
            <ProjectDetailsColLeftInner>
              <HeadingSecondary marginBottom="4rem">
                {dataProject.title}
              </HeadingSecondary>
              <DescriptionText>{dataProject.descriptionShort}</DescriptionText>

              <ButtonTransparent
                as="a"
                target="_blank"
                href={dataProject.gitHubUrl}
              >
                Visit github
              </ButtonTransparent>
            </ProjectDetailsColLeftInner>
          </ProjectDetailsColLeft>
          <ProjectDetailsColRight>
            <ProjectDetailsIntroText style={{ marginBottom: "4rem" }}>
              Project background
            </ProjectDetailsIntroText>
            <DescriptionText>{dataProject.descriptionLong}</DescriptionText>
            <ButtonTransparent
              as="a"
              target="_blank"
              href={dataProject.siteUrl}
              style={{ marginBottom: "4rem" }}
            >
              Visit website
            </ButtonTransparent>
            <ProjectDetailsIntroText style={{ marginBottom: "4rem" }}>
              Static previews
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
                <ProjectDetailsIntroText style={{ marginBottom: ".5rem" }}>
                  {index === 0
                    ? `${dataProjects[dataProjects.length - 1].title}`
                    : `${dataProjects[index - 1].title}`}
                </ProjectDetailsIntroText>
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
                <ProjectDetailsIntroText style={{ marginBottom: ".5rem" }}>
                  {index === dataProjects.length - 1
                    ? `${dataProjects[0].title}`
                    : `${dataProjects[index + 1].title}`}
                </ProjectDetailsIntroText>
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
