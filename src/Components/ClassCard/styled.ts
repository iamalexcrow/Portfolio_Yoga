import styled from "styled-components";
import {
  Flex,
  SmallText,
  SmallTitle,
  WhiteBox,
} from "../../common/regularComponents";
import colors from "../../Constnants/colors";

export const Wrapper = styled(WhiteBox)<{ mr?: string }>`
  margin-bottom: 30px;
  min-width: 300px;
  max-width: 350px;
  box-shadow: 0px 4px 25px rgba(142, 128, 169, 0.3);
  @media (max-width: 850px) {
    margin-bottom: 15px;
    max-width: 300px;
    min-width: 200px;
  }
  @media (max-width: 650px) {
    max-width: 300px;
    min-width: 200px;
    width: 100%;
  }
`;

export const InstructorName = styled(SmallText)`
  color: ${colors.pink};
`;

export const Image = styled.img``;

export const CardTitle = styled(SmallTitle)`
  font-size: 22px;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

export const CardData = styled(Flex)`
  background: ${colors.white};
  flex-direction: column;
  padding: 20px;
`;

export const ScheduleData = styled.div``;

export const Footer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;
