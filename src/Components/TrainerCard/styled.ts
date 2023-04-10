import styled from "styled-components";
import {
  BlockTitle,
  Flex,
  FlexCol,
  RegularText16,
  WhiteBox,
} from "../../common/regularComponents";

export const Wrapper = styled.div`
  padding: 32px;
  @media (max-width: 850px) {
    padding: 20px;
  }
`;
export const Card = styled(WhiteBox)`
  flex-direction: row;
`;

export const CardData = styled(FlexCol)`
  padding: 20px 30px;
`;

export const CardText = styled(RegularText16)`
  font-size: 12px;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Image = styled.img<{ circle?: boolean }>`
  width: 350px;
  height: 350px;
  ${(p: any) =>
    p.circle &&
    `
    width: 130px;
    height: 130px;
    border-radius: 150px;
    margin-right: 15px;
    margin-bottom: 15px;
  `}
`;

export const HeaderData = styled.div``;
export const Name = styled(BlockTitle)`
  font-size: 28px;
  line-height: 42px;
`;

export const CardHeader = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;

export const CardTitle = styled(BlockTitle)`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 25px;
  @media (max-width: 550px) {
    font-size: 14px;
    line-height: 21px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;
