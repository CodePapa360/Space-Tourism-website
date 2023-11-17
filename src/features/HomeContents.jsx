import { Link } from "react-router-dom";
import ContentsContainer from "../components/ContentsContainer";
import styled from "styled-components";
import Hero from "../components/Hero";
import InfoText from "../components/InfoText";
import TopSectionContainer from "../components/TopSectionContainer";

function HomeContents() {
  return (
    <ContentsContainer>
      <TopSectionContainer>
        <HomePageHero>
          <span>So you want to travel to</span> <Hero as="span">Space</Hero>
        </HomePageHero>
        <InfoText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </InfoText>
      </TopSectionContainer>

      <ExploreCircleContainer>
        <Link className="explore-circle" to="/destination">
          Explore
        </Link>
      </ExploreCircleContainer>
    </ContentsContainer>
  );
}

export default HomeContents;

const HomePageHero = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  word-spacing: 5px;

  :first-child {
    text-transform: uppercase;
    opacity: 0.8;
    display: block;
  }
`;

const ExploreCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    width: 10rem;
    border-radius: 99999px;
    background-color: white;
    font-family: "Bellefair", serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: black;
    transition: all 0.2s ease;
    position: relative;
    z-index: 20;

    &:hover {
      letter-spacing: 2px;
    }

    &::after {
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.459);
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: -1;
      transition: all 0.5s ease;
      pointer-events: none;
      opacity: 0;
    }

    &:hover::after {
      height: 120%;
      width: 120%;
      opacity: 1;
    }

    &::before {
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.459);
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: -1;
      pointer-events: none;
    }

    &:hover::before {
      animation-name: circleing;
      animation-iteration-count: 1;
      animation-duration: 0.5s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
  }
`;
