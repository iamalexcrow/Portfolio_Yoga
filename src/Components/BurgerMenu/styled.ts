import styled from "styled-components";
import { FlexCol } from "../../common/regularComponents";
import colors from "../../Constnants/colors";

export const Wrapper = styled(FlexCol)<{ dissapear?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  max-height: 100%;
  opacity: 1;
  background: ${colors.purple};
  transform: translateX(0px);
  transition: all 0.4s ease;
  z-index: 39;
  justify-content: center;
  align-items: center;
  ${(p: any) =>
    p.dissapear &&
    `
      opacity: 0;
      display: none;
      transform: translateX(500px);
      transition: all 0.4s ease;
    `}
`;
