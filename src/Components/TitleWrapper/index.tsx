import React from "react";
import { Title, Wrapper } from "./styled";
import { Center, FlexCol } from "../../common/regularComponents";

const TitleWrapper = ({ children, title }: any) => {
  return (
    <Wrapper>
      <Center>
        <Title>{title}</Title>
      </Center>
      <FlexCol>{children}</FlexCol>
    </Wrapper>
  );
};

export default TitleWrapper;
