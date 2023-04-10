import styled from "styled-components";
import { Flex } from "../../common/regularComponents";

export const Dot = styled(Flex)`
  width: 120px;
`;

export const Dots = styled.ul`
  bottom: -50px;
  & > li {
    width: 50px;
    height: 50px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 25px rgba(142, 128, 169, 0.8);
    transition: 0.3s;
  }
`;

export const DotBlock = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
`;
