import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dot, Dots, Image } from "./styled";
import TrainerCard from "../TrainerCard";
import team from "../../assets/data/teamData.json";

const TeamSlider = () => {
  let settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => <Dots>{dots}</Dots>,
    customPaging: (i: any) => (
      <Dot>
        <Image src={`./team/0${i + 1}.jpeg`} />
      </Dot>
    ),
  };
  return (
    <Slider {...settings}>
      {team.data.map((t: any) => {
        return <TrainerCard data={t} key={t.name} />;
      })}
    </Slider>
  );
};

export default TeamSlider;
