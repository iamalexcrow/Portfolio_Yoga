import styled from "styled-components";
import {
  Flex,
  FlexCol,
  SmallText,
  WhiteBox,
} from "../../common/regularComponents";
import colors from "../../Constnants/colors";

export const Wrapper = styled(WhiteBox)`
  margin: 20px;
  padding: 20px;
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const CardFooter = styled(Flex)`
  margin-top: 8px;
`;

export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const PersonInfo = styled(FlexCol)`
  padding-left: 20px;
`;

export const Date = styled(SmallText)`
  font-size: 10px;
  opacity: 0.7;
  color: ${colors.purple_darker};
`;

export const LogoContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;
