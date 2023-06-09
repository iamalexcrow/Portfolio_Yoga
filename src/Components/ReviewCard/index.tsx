import React from "react";
import {
  CardFooter,
  Date,
  LogoContainer,
  PersonInfo,
  Photo,
  Wrapper,
} from "./styled";
import { Review } from "../../common/interfaces";
import QuotationMarks from "../../assets/svg/QuotationMarks";
import { Flex, SmallText, StyledLink } from "../../common/regularComponents";

const ReviewCard = ({ data }: { data: Review }) => {
  return (
    <Wrapper>
      <div>
        <QuotationMarks />
        <SmallText>{data.review}</SmallText>
      </div>
      <CardFooter>
        <Photo src={data.image} />
        <PersonInfo>
          <SmallText red>{data.name}</SmallText>
          <Date>{data.date}</Date>
          <Flex>
            {data.svg.map((linkLogo: any, index) => {
              return (
                <StyledLink
                  href={data.link}
                  target="a_blank"
                  key={`${data.name}_${index}`}
                >
                  <LogoContainer>{linkLogo}</LogoContainer>
                </StyledLink>
              );
            })}
          </Flex>
        </PersonInfo>
      </CardFooter>
    </Wrapper>
  );
};

export default ReviewCard;
