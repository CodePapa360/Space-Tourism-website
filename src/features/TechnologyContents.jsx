import { Navigate, useParams } from "react-router-dom";
import jsonData from "../assets/data.json";
import Heading from "../components/Heading";
import ContentsContainer from "../components/ContentsContainer";
import ImageContainer from "../components/ImageContainer";
import TopSectionContainer from "../components/TopSectionContainer";
import styled from "styled-components";
import Hero from "../components/Hero";
import InfoText from "../components/InfoText";
import TabNav from "../components/TabNav";
import NotFound from "../components/NotFound";

function TechnologyContents() {
  const technologies = jsonData.technology;
  const { name: technologyName } = useParams();
  const activeName = technologyName || technologies[0].name;
  const currentTechnology = technologies.find((des) => des.name === activeName);

  if (!technologyName)
    return <Navigate to={`/technology/${technologies[0].name}`} replace />;
  if (!currentTechnology) return <NotFound />;

  return (
    <>
      <Heading index="03">Meat your crew</Heading>
      <ContentsContainer dir="rtl">
        <ImageContainer>
          <img
            src={currentTechnology.images.portrait}
            alt={currentTechnology.name}
          />
        </ImageContainer>

        <TopSectionContainer type="technology">
          <TechnologyInfo>
            <SubHeading>The Terminology...</SubHeading>
            <Hero size="small">{currentTechnology.name}</Hero>
            <InfoText>{currentTechnology.description}</InfoText>
          </TechnologyInfo>
          <TabNav type="numbered" contents={technologies} />
        </TopSectionContainer>
      </ContentsContainer>
    </>
  );
}

export default TechnologyContents;

const SubHeading = styled.p`
  text-transform: uppercase;
  opacity: 0.8;
  font-family: "Bellefair", serif;
  font-size: 1rem;
`;

const TechnologyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
