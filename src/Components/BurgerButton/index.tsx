import React from "react";

interface IBurgerButton {
  isBurgerMenuOpen: boolean;
  setBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BurgerButton = ({
  isBurgerMenuOpen,
  setBurgerMenuOpen,
}: IBurgerButton) => {
  return (
    <button
      onClick={() => setBurgerMenuOpen((prev) => !prev)}
      className={`hamburger hamburger--stand ${
        isBurgerMenuOpen ? "is-active" : ""
      }`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default BurgerButton;
