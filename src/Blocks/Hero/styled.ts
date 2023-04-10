import styled from "styled-components";
import {
  Center,
  Flex,
  H1,
  RegularText16,
} from "../../common/regularComponents";
import colors from "../../Constnants/colors";
import css from "../../Constnants/css";

export const Wrapper = styled.div`
  height: 100%;
  /* min-height: 908px; */
  width: 100%;
`;

export const HeroTitle = styled(H1)`
  text-transform: uppercase;
  text-shadow: 0px 0px 50px #7b79a1bf;
  color: ${colors.white};
  margin-bottom: 0px;
  margin-top: 0px;
  line-height: 220px;
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    font-size: 200px;
    line-height: 170px;
  }
  @media (max-width: 850px) {
    font-size: 100px;
    line-height: 100px;
  }
  @media (max-width: 450px) {
    font-size: 75px;
    line-height: 75px;
  }
`;

export const Container = styled(Center)`
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${css.maxWidth};
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  @media (max-width: 850px) {
    margin-top: 160px;
  }
`;

export const Subtitle = styled.p`
  /* position: absolute;
  top: 0px;
  left: 0px; */
  font-family: Caveat;
  font-size: 45px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px;
  color: ${colors.purple_darker};
  @media (max-width: 1200px) {
    font-size: 35px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const ButtonBlock = styled(Flex)`
  position: absolute;
  align-items: center;
  bottom: -90px;
  @media (max-width: 1200px) {
    bottom: -70px;
  }
  @media (max-width: 850px) {
    bottom: -170px;
  }
  /* @media (max-width: 450px) {
    bottom: -65px;
  } ; */
`;

export const Button = styled(Center)`
  background-color: ${colors.pink};
  width: 56px;
  height: 48px;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 48px;
    height: 40px;
  }
  @media (max-width: 850px) {
    width: 40px;
    height: 32px;
  }
`;

export const ButtonText = styled(RegularText16)`
  color: ${colors.pink};
  margin-left: 10px;
  max-width: 240px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  } ;
`;

export const Footer = styled(Flex)`
  justify-content: space-between;
  max-width: ${css.maxWidth}px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 0 16px;
  @media (max-width: 1200px) {
    margin-top: 150px;
  }
  @media (max-width: 850px) {
    margin-top: 300px;
  }
`;

export const City = styled(RegularText16)`
  color: ${colors.purple};
  weight: 500;
`;
export const SvgContainers = styled(Flex)`
  align-items: center;
`;

export const SvgButton = styled.a`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
`;
