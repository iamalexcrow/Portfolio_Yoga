import { Center, Flex, SmallText } from "./../../common/regularComponents";
import styled from "styled-components";
import { FlexCol } from "../../common/regularComponents";
import colors from "../../Constnants/colors";

export const Wrapper = styled(FlexCol)`
  /* padding-top: 100px; */
  /* padding-bottom: 120px;
  background-color: transparent;
  background-image: url("./clouds.png");
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat; */
`;

export const PriceCardsContainer = styled(Center)`
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const MonthsButtons = styled(Flex)`
  justify-content: center;
  margin-bottom: 40px;
`;

export const MonthButton = styled(SmallText)<{ underlined?: boolean }>`
  color: ${colors.pink};
  margin-right: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    transition: 0.3s;
    text-shadow: 0px 0px 20px ${colors.pink};
  }
  @media (max-width: 1200px) {
    margin-right: 30px;
  }
  ${(p: any) =>
    p.underlined &&
    `
  text-decoration: underline`}
`;
