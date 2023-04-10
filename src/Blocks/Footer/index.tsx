import React from "react";
import {
  BottomPart,
  FirstCol,
  FlexCols,
  FooterLink,
  FooterLinksContainer,
  Info,
  InfoItem,
  InterestText,
  ReasonBlock,
  RedButton,
  SecondCol,
  SvgButton,
  Title,
  TopPart,
  Wrapper,
} from "./styled";
import {
  BlockTitle,
  ContentContainer,
  PhoneNumber,
  StyledLink,
  TextInput,
} from "../../common/regularComponents";
import { StringState } from "../../common/interfaces";
import footerData from "../../assets/data/footerData.json";
import CrossSvg from "../../assets/svg/CrossSvg";

interface IFooter {
  interest: string;
  phoneRef: React.MutableRefObject<undefined>;
  nameReference: React.MutableRefObject<undefined>;
  name: StringState;
  setName: React.Dispatch<React.SetStateAction<StringState>>;
  phone: StringState;
  setPhone: React.Dispatch<React.SetStateAction<StringState>>;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
  submitForm: () => void;
}

const Footer = ({
  interest,
  nameReference,
  phoneRef,
  name,
  setName,
  phone,
  setPhone,
  setInterest,
  submitForm,
}: IFooter) => {
  return (
    <Wrapper>
      <TopPart>
        <ContentContainer>
          <FlexCols>
            <FirstCol>
              <InfoItem>
                <Title>Address</Title>
                <Info>{footerData.address}</Info>
              </InfoItem>
              <InfoItem>
                <Title>Time</Title>
                <Info>{footerData.time}</Info>
              </InfoItem>
            </FirstCol>
            <FirstCol>
              <InfoItem>
                <Title>Phone</Title>
                <PhoneNumber>
                  <Info>{footerData.phone}</Info>
                </PhoneNumber>
              </InfoItem>
              <InfoItem>
                <Title>Email</Title>
                <StyledLink href="mailto: iamalexcrow@gmail.com">
                  <Info>{footerData.email}</Info>
                </StyledLink>
              </InfoItem>
            </FirstCol>
            <SecondCol>
              <BlockTitle>Sign up for a free class today</BlockTitle>
              <TextInput
                error={name.error}
                placeholder="Your name"
                ref={nameReference}
                value={name.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName({ value: e.target.value, error: false })
                }
              />
              <TextInput
                error={phone.error}
                placeholder="Your phone"
                ref={phoneRef}
                value={phone.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone({ value: e.target.value, error: false })
                }
              />
              <ReasonBlock>
                <InterestText>{interest}</InterestText>
                {interest && (
                  <SvgButton onClick={() => setInterest("")}>
                    <CrossSvg />
                  </SvgButton>
                )}
              </ReasonBlock>

              <RedButton onClick={submitForm}>Request a class</RedButton>
            </SecondCol>
          </FlexCols>
        </ContentContainer>
      </TopPart>
      <BottomPart>
        <ContentContainer>
          <FooterLinksContainer>
            <FooterLink>2023 Aleksandr Vorona</FooterLink>
            <FooterLink>FrontEnd Developer</FooterLink>
          </FooterLinksContainer>
        </ContentContainer>
      </BottomPart>
    </Wrapper>
  );
};

export default Footer;
