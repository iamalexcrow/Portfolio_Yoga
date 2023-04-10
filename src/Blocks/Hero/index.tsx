import React from "react";
import {
  Button,
  ButtonBlock,
  ButtonText,
  City,
  Container,
  Footer,
  HeroTitle,
  Subtitle,
  SvgButton,
  SvgContainers,
  Wrapper,
} from "./styled";
import VectorRight from "../../assets/svg/VectorRight";
import VkSvg from "../../assets/svg/VkSvg";
import TwitterSvg from "../../assets/svg/TwitterSvg";
import FacebookSvg from "../../assets/svg/FacebookSvg";
import { Flex } from "../../common/regularComponents";

const Hero = ({
  scrollTo,
  setReturnPlace,
  setInterest,
}: {
  scrollTo: (s?: string) => void;
  setReturnPlace: React.Dispatch<
    React.SetStateAction<"start" | "catalog" | "prices">
  >;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onClick = () => {
    scrollTo();
    setReturnPlace("start");
    setInterest("I would like to sign up for a free class");
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Subtitle>Find your inner balance with us</Subtitle>
          <HeroTitle>Yoga</HeroTitle>
        </div>
        <ButtonBlock>
          <Button onClick={onClick}>
            <VectorRight />
          </Button>
          <ButtonText>Sign up for a free class today</ButtonText>
        </ButtonBlock>
      </Container>
      <Footer>
        <SvgContainers>
          <SvgButton
            href="https://www.linkedin.com/in/aleksandrvorona/"
            target="a_blank"
          >
            <VkSvg />
          </SvgButton>
          <SvgButton
            href="https://www.linkedin.com/in/aleksandrvorona/"
            target="a_blank"
          >
            <TwitterSvg />
          </SvgButton>
          <SvgButton
            href="https://www.linkedin.com/in/aleksandrvorona/"
            target="a_blank"
          >
            <FacebookSvg />
          </SvgButton>
        </SvgContainers>
        <Flex>
          <City>Guanajuato, Mexico</City>
        </Flex>
      </Footer>
    </Wrapper>
  );
};

export default Hero;
