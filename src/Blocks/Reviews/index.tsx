import React from "react";
import BlockWrapper from "../../Components/BlockWrapper";
import ReviewsSlider from "../../Components/ReviewsSlider";
import { Wrapper } from "./styled";

const Reviews = ({
  reference,
}: {
  reference: React.MutableRefObject<undefined>;
}) => {
  return (
    <Wrapper ref={reference}>
      <BlockWrapper title="Reviews">
        <ReviewsSlider />
      </BlockWrapper>
    </Wrapper>
  );
};

export default Reviews;
