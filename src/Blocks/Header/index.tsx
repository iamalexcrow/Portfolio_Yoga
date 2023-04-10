import React from "react";
import { ButtonsContainer, HeaderButton, Wrapper } from "./styled";
import LogoSvg from "../../assets/svg/LogoSvg";
import headerButtons from "../../assets/data/headerButtons.json";
import { useWindowSize } from "../../useWindowSize";
import BurgerButton from "../../Components/BurgerButton";
import BurgerMenu from "../../Components/BurgerMenu";
import { PhoneNumber } from "../../common/regularComponents";
import css from "../../Constnants/css";

interface IHeader {
  scrollTo: (s?: string, instant?: boolean) => void;
  setReturnPlace: React.Dispatch<
    React.SetStateAction<"start" | "catalog" | "prices">
  >;
  reference: React.MutableRefObject<undefined>;
  isBurgerMenuOpen: boolean;
  setBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IHeaderButton {
  title: string;
  link: string;
}

const Header = ({
  scrollTo,
  setReturnPlace,
  reference,
  isBurgerMenuOpen,
  setBurgerMenuOpen,
}: IHeader) => {
  const [width] = useWindowSize();

  const onClick = (link: string, instant?: boolean) => {
    setReturnPlace("start");
    scrollTo(link, instant);
    if (width < css.laptop_width) {
      setBurgerMenuOpen(false);
    }
  };

  const parseButtons = (color?: string) => {
    return headerButtons.data.map((b: IHeaderButton) => {
      return (
        <HeaderButton
          onClick={() => onClick(b.link, !!color)}
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
            <PhoneNumber>+52 (55) 1236 6188</PhoneNumber>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Header;
