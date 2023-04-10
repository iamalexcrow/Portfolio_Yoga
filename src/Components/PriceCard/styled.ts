import styled from "styled-components";
import {
  RegularText16,
  SmallText,
  SmallTitle,
  WhiteBox,
} from "../../common/regularComponents";
import colors from "../../Constnants/colors";

export const Wrapper = styled(WhiteBox)<{ middleCard?: boolean }>`
  padding: 20px;
  width: ${(p: any) => (p.middleCard ? "300px" : "265px")};
  height: ${(p: any) => (p.middleCard ? "331px" : "303px")};
  justify-content: space-between;
  align-items: center;
  margin-right: 25px;
  margin-left: 25px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 4px 25px rgba(142, 128, 169, 0.6);
    transition: 0.3s;
  }
  @media (max-width: 1200px) {
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 15px;
  }
`;

export const Title = styled(SmallTitle)<{ middleCard?: boolean }>`
  font-size: ${(p: any) => (p.middleCard ? "36px" : "26px")};
  margin-top: 30px;
`;

export const Description = styled(SmallText)`
  font-size: 14px;
  line-height: 21px;
  max-width: ${(p: any) => (p.middleCard ? "180px" : "120px")};
  text-align: center;
`;

export const Price = styled(SmallText)<{ middleCard?: boolean }>`
  font-size: ${(p: any) => (p.middleCard ? "50px" : "34px")};
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const ButtonText = styled(RegularText16)`
  font-size: 12px;
  color: ${colors.white};
`;
