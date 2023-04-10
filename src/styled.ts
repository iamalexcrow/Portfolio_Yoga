import styled from "styled-components";

export const AppWrapper = styled.div`
  background-position: top;
  background-image: url("./HeroBackground.png");
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 850px) {
    background-size: 120%;
  }
  @media (max-width: 750px) {
    background-size: 200%;
  }
  @media (max-width: 650px) {
    background-size: 200%;
  }
  /* @media (max-width: 550px) {
    background-size: 150%;
  } */
  @media (max-width: 550px) {
    background-size: 270%;
  }
  /* @media (max-width: 350px) {
    background-size: 180%;
  } */
`;

export const Clouds = styled.div`
  padding-bottom: 60px;
  background-color: transparent;
  background-image: url("./clouds.png");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 850px) {
    background-size: 120%;
  }
  @media (max-width: 750px) {
    background-size: 130%;
  }
  @media (max-width: 650px) {
    background-size: 140%;
    padding-bottom: 0px;
  }
  @media (max-width: 550px) {
    background-size: 150%;
  }
  @media (max-width: 450px) {
    background-size: 160%;
  }
  @media (max-width: 350px) {
    background-size: 180%;
  }
`;

export const BackgroundFlowerLeft = styled.div`
  background-color: transparent;
  background-image: url("./teamBackground.png");
  background-position: ;
  background-size: 75%;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  @media (max-width: 850px) {
    background-size: 120%;
  }
  @media (max-width: 750px) {
    background-size: 130%;
  }
  @media (max-width: 650px) {
    background-size: 140%;
  }
  @media (max-width: 550px) {
    background-size: 150%;
  }
  @media (max-width: 450px) {
    background-size: 160%;
  }
  @media (max-width: 350px) {
    background-size: 180%;
  }
`;
