import React from "react";
import {
  CardData,
  CardTitle,
  Footer,
  Image,
  InstructorName,
  Wrapper,
} from "./styled";
import {
  FlexCol,
  PurpleButton,
  SmallText,
} from "../../common/regularComponents";
import VectorRight from "../../assets/svg/VectorRight";

interface IClassCard {
  data: any;
  mr?: string;
  onCardClick: (s: string) => void;
}

const ClassCard = ({ data, mr, onCardClick }: IClassCard) => {
  return (
    <Wrapper>
      <Image src={data.img} alt={data.title} />
      <CardData>
        <CardTitle>{data.title}</CardTitle>
        <FlexCol>
          {data.time.map((t: string) => {
            return <SmallText key={t}>{t}</SmallText>;
          })}
          <Footer>
            <InstructorName>
              Instructor <br />
              {data.instructor}
            </InstructorName>
            <PurpleButton onClick={() => onCardClick(data.title)}>
              <VectorRight />
            </PurpleButton>
          </Footer>
        </FlexCol>
      </CardData>
    </Wrapper>
  );
};

export default ClassCard;
