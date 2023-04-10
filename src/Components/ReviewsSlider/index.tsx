import React from "react";
import Slider from "react-slick";
import ReviewCard from "../ReviewCard";
import { Review } from "../../common/interfaces";
import TwitterSvg from "../../assets/svg/TwitterSvg";
import VkSvg from "../../assets/svg/VkSvg";
import FacebookSvg from "../../assets/svg/FacebookSvg";
import { useWindowSize } from "../../useWindowSize";

const data: Array<Review> = [
  {
    name: "Cair",
    date: "March 2020",
    image: "./customers/01.jpeg",
    links: [<TwitterSvg />, <FacebookSvg />],
    review: "Thanks to this studio, my back pain is gone! Life-changing",
  },
  {
    name: "Mary",
    date: "September 2021",
    image: "./customers/02.jpeg",
    links: [<VkSvg />, <FacebookSvg />],
    review:
      "I fell in love with yoga at this studio! The instructors are knowledgeable and supportive, and the classes are challenging yet accessible. Thanks to their guidance, I've learned to fly and have gained so much confidence and strength on and off the mat. I highly recommend this studio to anyone looking to deepen their practice!",
  },
  {
    name: "Tom",
    date: "April 2020",
    image: "./customers/03.jpeg",
    links: [<TwitterSvg />],
    review:
      "I joined this yoga studio and it has been a game-changer! Not only have I gained confidence in my practice, but I also saw my toes for the first time in years! The best part? I made new friends who share my love for yoga. Highly recommend!",
  },
  {
    name: "Jerry",
    date: "May 2022",
    image: "./customers/04.jpeg",
    links: [<TwitterSvg />, <FacebookSvg />],
    review:
      "I absolutely loved my experience at this yoga studio! The atmosphere was so peaceful and welcoming, and the approach was both challenging and accessible. The instructors were knowledgeable and attentive, creating a safe and supportive space to deepen my practice. I left feeling rejuvenated and centered. Can't wait to come back!",
  },
  {
    name: "Emily",
    date: "January 2023",
    image: "./customers/05.jpeg",
    links: [<TwitterSvg />, <VkSvg />],
    review:
      "I am so grateful to this yoga studio for helping me find my inner balance and overcome my fears. The classes are transformative and the instructors are amazing. I highly recommend this studio to anyone looking to deepen their practice and cultivate mindfulness.",
  },
  {
    name: "Greg",
    date: "March 2023",
    image: "./customers/06.jpeg",
    links: [<VkSvg />, <FacebookSvg />],
    review:
      "I feel so calm and centered after practicing at this yoga studio. The atmosphere is so peaceful and I've become one with everything. Highly recommend!",
  },
];

const ReviewsSlider = () => {
  const [width] = useWindowSize();

  let settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: width > 850 ? 2 : 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {data.map((review: Review) => {
        return <ReviewCard data={review} key={review.name} />;
      })}
    </Slider>
  );
};

export default ReviewsSlider;
