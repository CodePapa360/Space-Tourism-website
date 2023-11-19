import { Navigate, useParams } from "react-router-dom";
import jsonData from "../assets/data.json";
import Heading from "../components/Heading";
import ContentsContainer from "../components/ContentsContainer";
import ImageContainer from "../components/ImageContainer";
import TopSectionContainer from "../components/TopSectionContainer";
import TabNav from "../components/TabNav";
import styled from "styled-components";
import Hero from "../components/Hero";
import InfoText from "../components/InfoText";
import NotFound from "../components/NotFound";

function CrewContents() {
  const crews = jsonData.crew;
  const { name: crewName } = useParams();
  const activeName = crewName || crews[0].name;
  const currentCrew = crews.find((des) => des.name === activeName);

  if (!crewName) return <Navigate to={`/crew/${crews[0].name}`} replace />;
  if (!currentCrew) return <NotFound />;

  return (
    <>
      <Heading index="02">Meat your crew</Heading>
      <ContentsContainer dir="rtl">
        <ImageContainer>
          <img src={currentCrew.images.webp} alt={currentCrew.name} />
        </ImageContainer>

        <TopSectionContainer>
          <SubHeading>{currentCrew.role}</SubHeading>
          <Hero size="small">{currentCrew.name}</Hero>
          <InfoText>{currentCrew.bio}</InfoText>
          <TabNav type="dotted" contents={crews} />
        </TopSectionContainer>
      </ContentsContainer>
    </>
  );
}

export default CrewContents;

const SubHeading = styled.p`
  text-transform: uppercase;
  opacity: 0.8;
  font-family: "Bellefair", serif;
  font-size: 1.3rem;
`;
