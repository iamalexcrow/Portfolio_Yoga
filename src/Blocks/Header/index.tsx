import React, { useState } from "react";
import { ButtonsContainer, HeaderButton, Wrapper } from "./styled";
import LogoSvg from "../../assets/svg/LogoSvg";
import headerButtons from "../../assets/data/headerButtons.json";
import { useWindowSize } from "../../useWindowSize";
import BurgerButton from "../../Components/BurgerButton";
import BurgerMenu from "../../Components/BurgerMenu";
import { PhoneNumber } from "../../common/regularComponents";
import css from "../../Constnants/css";
interface IHeaderButton {
  title: string;
  link: string;
}

const Header = ({
  scrollTo,
  setReturnPlace,
  reference,
}: {
  scrollTo: (s?: string) => void;
  setReturnPlace: React.Dispatch<
    React.SetStateAction<"start" | "catalog" | "prices">
  >;
  reference: React.MutableRefObject<undefined>;
}) => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [width] = useWindowSize();

  const onClick = (link: string) => {
    setReturnPlace("start");
    scrollTo(link);
    if (width < css.laptop_width) {
      setBurgerMenuOpen(false);
    }
  };

  const parseButtons = (color?: string) => {
    return headerButtons.data.map((b: IHeaderButton) => {
      return (
        <HeaderButton
          onClick={() => onClick(b.link)}
          key={b.title}
          color={color}
        >
          {b.title}
        </HeaderButton>
      );
    });
  };

  return (
    <>
      {width < css.laptop_width && (
        <BurgerMenu isOpen={isBurgerMenuOpen} parseButtons={parseButtons} />
      )}
      <Wrapper ref={reference} spaceBetween={width <= css.laptop_width}>
        <LogoSvg />
        {width < css.laptop_width && (
          <BurgerButton
            isBurgerMenuOpen={isBurgerMenuOpen}
            setBurgerMenuOpen={setBurgerMenuOpen}
          />
        )}

        {width >= css.laptop_width && (
          <>
            <ButtonsContainer>{parseButtons()}</ButtonsContainer>
            <PhoneNumber>+1 (XXX) XXX-XXXX</PhoneNumber>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Header;
