import styled from "styled-components";
import colors from "../Constnants/colors";
import css from "../Constnants/css";

export const Flex = styled.div`
  display: flex;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
  max-width: 100%;
`;

export const ContentContainer = styled.div`
  padding: 0 16px;
  max-width: ${css.maxWidth}px;
  width: 100%;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-family: Montserrat;
  font-size: 265px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-align: left;
`;

export const RegularText16 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  }
`;

export const RegularText14 = styled(RegularText16)`
  font-size: 14px;
`;

export const RegularTextThin = styled(RegularText16)`
  font-weight: 500;
  line-height: 15px;
`;

export const BlockTitle = styled.h3`
  margin: 0px;
  color: ${colors.purple_darker};
  font-family: "Abhaya Libre", serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Center = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const SmallTitle = styled(BlockTitle)`
  font-size: 16px;
`;

export const WhiteBox = styled(FlexCol)`
  background: ${colors.white};
  box-shadow: 0px 4px 25px rgba(142, 128, 169, 0.2);
`;

export const SmallText = styled.p<{ red?: boolean }>`
  margin: 0px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color ${colors.purple_darker};
  @media(max-width: 550px) {
    font-size: 10px;
    line-height: 15px;
  }
  ${(p: any) =>
    p.red &&
    `
  color: ${colors.pink}
`}
`;

export const PurpleButton = styled.button<{ width?: string; height?: string }>`
  cursor: pointer;
  width: 45px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.purple_darker};
  outline: none;
  border: none;
  transition: 0.3s;
  &:hover {
    background: ${colors.pink};
    transition: 0.3s;
  }
  ${(p: any) =>
    p.width &&
    `
    width: ${p.width};
  `}
  ${(p: any) =>
    p.height &&
    `
    height: ${p.height};
  `}
`;

export const CircleButton = styled(PurpleButton)<{ appear?: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background: ${colors.pink};
  transform: rotate(-90deg) translateY(70px);
  z-index: 500;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1) rotate(-90deg);
    box-shadow: 0px 0px 14px ${colors.pink};
    transition: 0.3s;
  }
  ${(p: any) =>
    p.appear &&
    `
    transform: rotate(-90deg) translateY(0px);
    transition: 0.3s;
  `}
`;

type IPhoneNumber = {
  white?: boolean;
  center?: boolean;
};

export const PhoneNumber = styled.a.attrs({
  href: "https://api.whatsapp.com/send?phone=525512366188",
  target: "a_blank",
})<IPhoneNumber>`
  color: ${colors.purple};
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  min-width: 150px;
  line-height: 20px;
  letter-spacing: 0em;
  text-decoration: underline;
  text-align: left;
  cursor: pointer;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  }
  ${(p: any) =>
    p.center &&
    `
  text-align: center`};
  ${(p: any) =>
    p.white &&
    `
  color: white;`};
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  color: ${colors.purple_darker};
`;

export const TextInput = styled.input.attrs({
  type: "text",
})<{ error?: boolean }>`
  border: none;
  background: transparent;
  border-bottom: 1px solid ${colors.purple_darker};
  color: ${colors.purple_darker};
  opacity: 0.7;
  outline: none;
  height: 30px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
  width: 100%;
  &::placeholder {
    color: ${colors.purple_darker};
  }
  ${(p: any) =>
    p.error &&
    `
    border-color: ${colors.pink}
  `}
`;
