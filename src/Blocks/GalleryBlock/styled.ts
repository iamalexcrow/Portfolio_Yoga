import styled from "styled-components";
import { FlexCol } from "../../common/regularComponents";

export const Wrapper = styled(FlexCol)`
  margin-bottom: 16px;
`;

export const Container = styled.div`
  background: white;
  border-radius: 4px;
  padding: 2px;
  /* border: 5px solid #f0ebf9; */
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 1200px) {
    margin: 0 15px;
  }
`;
