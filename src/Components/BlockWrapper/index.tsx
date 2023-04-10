import React from "react";
import { Center, ContentContainer } from "../../common/regularComponents";
import { Title, Wrapper } from "./styled";

const BlockWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <ContentContainer>
        <Center>
          <Title>{title}</Title>
        </Center>
        <>{children}</>
      </ContentContainer>
    </Wrapper>
  );
};

export default BlockWrapper;
