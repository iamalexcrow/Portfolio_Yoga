import React from "react";
import { ButtonText, Description, Price, Title, Wrapper } from "./styled";
import { PurpleButton } from "../../common/regularComponents";
import { IPriceCard } from "../../common/interfaces";

interface IPriceCardInt {
  selected: number;
  middleCard: boolean;
  onPriceCardClick: (s: number) => void;
  data: IPriceCard;
  index: number;
}

const PriceCard = ({
  data,
  selected,
  middleCard,
  onPriceCardClick,
  index,
}: IPriceCardInt) => {
  return (
    <Wrapper middleCard={middleCard}>
      <Title middleCard={middleCard}>{data.title}</Title>
      <Description middleCard={middleCard} red>
        {data.description}
      </Description>
      <Price middleCard={middleCard}>{data.price[selected]}</Price>
      <PurpleButton
        width="100%"
        height="52px"
        onClick={() => onPriceCardClick(index)}
      >
        <ButtonText>Buy now</ButtonText>
      </PurpleButton>
    </Wrapper>
  );
};

export default PriceCard;
