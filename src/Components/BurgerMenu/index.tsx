import React from "react";
import { Wrapper } from "./styled";
import { FlexCol, PhoneNumber } from "../../common/regularComponents";

const BurgerMenu = ({
  isOpen,
  parseButtons,
}: {
  isOpen: boolean;
  parseButtons: (s: string) => void;
}) => {
  return (
    <Wrapper dissapear={!isOpen}>
      <FlexCol>
        {parseButtons("white")}
        <PhoneNumber white>+1 (XXX) XXX-XXXX</PhoneNumber>
      </FlexCol>
    </Wrapper>
  );
};

export default BurgerMenu;
