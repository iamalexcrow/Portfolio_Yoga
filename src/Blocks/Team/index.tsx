import React from "react";
import { Wrapper } from "./styled";
import TeamSlider from "../../Components/TeamSlider";
import BlockWrapper from "../../Components/BlockWrapper";

const Team = ({
  reference,
}: {
  reference: React.MutableRefObject<undefined>;
}) => {
  return (
    <Wrapper ref={reference}>
      <BlockWrapper title="Our Team">
        <TeamSlider />
      </BlockWrapper>
    </Wrapper>
  );
};

export default Team;
