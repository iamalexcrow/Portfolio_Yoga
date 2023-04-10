import styled from "styled-components";
import { Flex, RegularText16 } from "../../common/regularComponents";
import css from "../../Constnants/css";
import colors from "../../Constnants/colors";

export const Wrapper = styled(Flex)<{ spaceBetween?: boolean }>`
  align-items: center;
  max-width: ${css.maxWidth}px;
  padding: 0 16px;
  margin: 0 auto;
  ${(p: any) =>
    p.spaceBetween &&
    `
  justify-content: space-between`}
`;

export const HeaderButton = styled(RegularText16)<{ color?: string }>`
  color: ${colors.purple};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 8px white;
  }
  ${(p: any) =>
    p.color === "white" &&
    `
    color: ${colors.white};
    text-align: center;
  `}
`;

export const ButtonsContainer = styled(Flex)`
  width: 100%;
  justify-content: space-around;
  text-transform: uppercase;
`;
