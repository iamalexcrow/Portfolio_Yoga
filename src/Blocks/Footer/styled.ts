import styled from "styled-components";
import {
  Center,
  Flex,
  FlexCol,
  PurpleButton,
  SmallText,
} from "../../common/regularComponents";
import colors from "../../Constnants/colors";

export const Wrapper = styled(FlexCol)`
  margin-bottom: 0px;
  overflow: hidden;
`;

export const TopPart = styled(Flex)`
  background-color: transparent;
  background-image: url("./Footer.png");
  background-position: left;
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 80px 20px;
  @media (max-width: 1300px) {
    background-size: 130%;
  }
  @media (max-width: 1100px) {
    background-size: 150%;
  }
  @media (max-width: 1000px) {
    background-size: 200%;
    padding: 40px 0px;
  }
  @media (max-width: 850px) {
    background-size: 400%;
    padding-bottom: 0px;
  }
  @media (max-width: 450px) {
    background-size: 550%;
  }
  @media (max-width: 350px) {
    background-size: 650%;
    padding: 0px;
  }
`;

export const BottomPart = styled(Flex)`
  background-color: #8373a1;
  height: 100px;
  @media (max-width: 500px) {
    height: 70px;
  }
`;

export const FlexCols = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 20px 0px;
  }
`;

export const FirstCol = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 40px;
  height: 100%;
  width: 100%;
  @media (max-width: 850px) {
    grid-column-gap: 20px;
  }
  @media (max-width: 550px) {
    grid-column-gap: 10px;
  }
  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLinksContainer = styled(Center)`
  height: 100%;
  justify-content: space-between;
`;
export const SecondCol = styled(FlexCol)`
  min-width: 500px;
  @media (max-width: 850px) {
    min-width: 0px;
    max-width: 500px;
    width: 100%;
  }
`;

export const InfoItem = styled(FlexCol)`
  margin-bottom: 16px;
`;

export const Title = styled(SmallText)`
  font-size: 14px;
`;

export const Info = styled(SmallText)``;

export const FooterLink = styled.a.attrs({
  href: "https://www.linkedin.com/in/aleksandrvorona/",
  target: "a_blank",
})`
  margin: 0px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${colors.white};
  width: 100%;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  cursor: pointer;
  &:last-child {
    justify-content: flex-end;
  }
`;

export const RedButton = styled(PurpleButton)`
  background: ${colors.pink};
  width: 100%;
  margin-top: 20px;
  height: 56px;
  color: ${colors.white};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const ReasonBlock = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: auto 20px;
  height: 30px;
`;

export const InterestText = styled(SmallText)`
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const SvgButton = styled(Flex)`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: -10px;
  right: 0px;
`;
