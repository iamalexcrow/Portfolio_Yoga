import React from "react";
import {
  BottomPart,
  FirstCol,
  Grid,
  Info,
  InfoItem,
  InterestText,
  ReasonBlock,
  RedButton,
  SecondCol,
  SvgButton,
  Title,
  TopPart,
  WhiteText,
  Wrapper,
} from "./styled";
import {
  BlockTitle,
  ContentContainer,
  FlexCol,
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
          <Grid>
            <FirstCol>
              <FlexCol>
                <InfoItem>
                  <Title>Address</Title>
                  <Info>{footerData.address}</Info>
                </InfoItem>
                <InfoItem>
                  <Title>Time</Title>
                  <Info>{footerData.time}</Info>
                </InfoItem>
              </FlexCol>
              <FlexCol>
                <InfoItem>
                  <Title>Phone</Title>
                  <Info>{footerData.phone}</Info>
                </InfoItem>
                <InfoItem>
                  <Title>Email</Title>
                  <Info>{footerData.email}</Info>
                </InfoItem>
              </FlexCol>
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
                {/* <TextInput
                  placeholder="Commentary"
                  value={interest}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInterest(e.target.value)
                  }
                /> */}
                <InterestText>{interest}</InterestText>
                {interest && (
                  <SvgButton onClick={() => setInterest("")}>
                    <CrossSvg />
                  </SvgButton>
                )}
              </ReasonBlock>

              <RedButton onClick={submitForm}>Request a class</RedButton>
            </SecondCol>
          </Grid>
        </ContentContainer>
      </TopPart>
      <BottomPart>
        <ContentContainer>
          <FirstCol>
            <WhiteText>Aleksandr Vorona</WhiteText>
            <WhiteText>2023 Done with love to land a job</WhiteText>
          </FirstCol>
        </ContentContainer>
      </BottomPart>
    </Wrapper>
  );
};

export default Footer;
