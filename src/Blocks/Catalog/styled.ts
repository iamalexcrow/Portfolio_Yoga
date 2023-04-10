import styled from "styled-components";
import { Flex, FlexCol } from "../../common/regularComponents";

export const Wrapper = styled(FlexCol)`
  height: 100%;
  width: 100%;
  /* min-height: 908px; */
`;

export const CardsFlex = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 1200px) {
    align-items: flex-start;
  }
`;

export const ColWithMargin = styled.div`
  margin-right: 30px;
  @media (max-width: 850px) {
    margin-right: 15px;
  }
`;
