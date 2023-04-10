import React from "react";
import {
  Card,
  CardData,
  CardHeader,
  CardTitle,
  HeaderData,
  Image,
  Name,
  Wrapper,
} from "./styled";
import { FlexCol, SmallText } from "../../common/regularComponents";
import { useWindowSize } from "../../useWindowSize";

const TrainerCard = ({ data }: any) => {
  const [width] = useWindowSize();
  return (
    <Wrapper>
      <Card>
        {width >= 1000 && <Image src={data.photo} alt={data.name} />}
        <CardData>
          <CardHeader>
            {width < 1000 && <Image src={data.photo} alt={data.name} circle />}
            <HeaderData>
              <Name>{data.name}</Name>
              <SmallText red>Experience: {data.experience}</SmallText>
            </HeaderData>
          </CardHeader>
          <FlexCol>
            {data.description.map((d: string) => {
              return <CardTitle key={d.slice(0, 10)}>{d}</CardTitle>;
            })}
          </FlexCol>
        </CardData>
      </Card>
    </Wrapper>
  );
};

export default TrainerCard;
