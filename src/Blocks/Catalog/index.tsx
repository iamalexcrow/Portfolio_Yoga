import React from "react";
import { CardsFlex, ColWithMargin, Wrapper } from "./styled";
import { FlexCol } from "../../common/regularComponents";
import ClassCard from "../../Components/ClassCard";
import BlockWrapper from "../../Components/BlockWrapper";
import classesData from "../../assets/data/classesData.json";
import { useWindowSize } from "../../useWindowSize";

interface ICatalog {
  reference: React.MutableRefObject<undefined>;
  setReturnPlace: React.Dispatch<
    React.SetStateAction<"start" | "catalog" | "prices">
  >;
  scrollTo: (s?: string) => void;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
}
const Catalog = ({
  reference,
  scrollTo,
  setReturnPlace,
  setInterest,
}: ICatalog) => {
  const [width] = useWindowSize();

  const onCardClick = (className: string) => {
    setReturnPlace("catalog");
    scrollTo();
    setInterest(`I would like to know about ${className}`);
  };
  return (
    <Wrapper id="classes" ref={reference}>
      <BlockWrapper title="Classes">
        <CardsFlex>
          {width >= 650 ? (
            <>
              {width >= 1200 && (
                <ColWithMargin>
                  <ClassCard
                    data={classesData.data[0]}
                    onCardClick={onCardClick}
                  />
                </ColWithMargin>
              )}

              <ColWithMargin>
                <ClassCard
                  data={classesData.data[1]}
                  onCardClick={onCardClick}
                />
                <ClassCard
                  data={classesData.data[2]}
                  onCardClick={onCardClick}
                />
              </ColWithMargin>
              <FlexCol>
                {width < 1200 && (
                  <ClassCard
                    data={classesData.data[0]}
                    onCardClick={onCardClick}
                  />
                )}
                <ClassCard
                  data={classesData.data[3]}
                  mr="0px"
                  onCardClick={onCardClick}
                />
              </FlexCol>
            </>
          ) : (
            <FlexCol>
              {classesData.data.map((c: any) => {
                return (
                  <ClassCard key={c.title} data={c} onCardClick={onCardClick} />
                );
              })}
            </FlexCol>
          )}
        </CardsFlex>
      </BlockWrapper>
    </Wrapper>
  );
};

export default Catalog;
