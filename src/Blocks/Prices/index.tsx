import React, { useEffect, useState } from "react";
import {
  MonthButton,
  MonthsButtons,
  PriceCardsContainer,
  Wrapper,
} from "./styled";
import { Center, Flex } from "../../common/regularComponents";
import PriceCard from "../../Components/PriceCard";
import BlockWrapper from "../../Components/BlockWrapper";
import monthsData from "../../assets/data/monthsData.json";
import pricesData from "../../assets/data/prices.json";
import { IPriceCard } from "../../common/interfaces";
import { useWindowSize } from "../../useWindowSize";

interface IPrices {
  reference: React.MutableRefObject<undefined>;
  setReturnPlace: React.Dispatch<
    React.SetStateAction<"start" | "catalog" | "prices">
  >;
  scrollTo: () => void;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
}
const Prices = ({
  reference,
  scrollTo,
  setReturnPlace,
  setInterest,
}: IPrices) => {
  const [selected, setSelected] = useState(0);
  const [width] = useWindowSize();
  const onPriceCardClick = (index: number) => {
    scrollTo();
    setReturnPlace("prices");
    setInterest(
      `I would like to purchase ${index ? "an" : "a"} "${
        pricesData.data[index].title
      }" package for ${monthsData.data[index]} for ${
        pricesData.data[index].price[selected]
      }`
    );
  };
  return (
    <Wrapper ref={reference}>
      <BlockWrapper title={"Prices"}>
        <MonthsButtons>
          {monthsData.data.map((m: string, index: number) => {
            return (
              <MonthButton
                underlined={index === selected}
                key={m}
                onClick={() => setSelected(index)}
              >
                {m}
              </MonthButton>
            );
          })}
        </MonthsButtons>
        <PriceCardsContainer>
          {pricesData.data.map((price: IPriceCard, index: number) => {
            return (
              <PriceCard
                data={price}
                index={index}
                selected={selected}
                middleCard={width >= 960 && index === 1}
                key={price.title}
                onPriceCardClick={onPriceCardClick}
              />
            );
          })}
        </PriceCardsContainer>
      </BlockWrapper>
    </Wrapper>
  );
};

export default Prices;
