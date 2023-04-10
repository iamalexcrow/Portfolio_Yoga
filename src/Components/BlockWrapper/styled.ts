import styled from "styled-components";
import { BlockTitle, FlexCol } from "../../common/regularComponents";

export const Wrapper = styled(FlexCol)``;

export const Title = styled(BlockTitle)`
  margin: 40px 0px;
  font-size: 40px;
  @media (max-width: 1200px) {
    margin: 32px 0px;
    font-size: 32px;
  }
  @media (max-width: 850px) {
    margin: 15px 0px;
  }
`;
