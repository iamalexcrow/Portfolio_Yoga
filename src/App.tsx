import React, { useRef, useState } from "react";
import { AppWrapper, BackgroundFlowerLeft, Clouds } from "./styled";
import Hero from "./Blocks/Hero";
import Catalog from "./Blocks/Catalog";
import Prices from "./Blocks/Prices";
import Team from "./Blocks/Team";
import Gallery from "./Blocks/GalleryBlock";
import Reviews from "./Blocks/Reviews";
import Footer from "./Blocks/Footer";
import Header from "./Blocks/Header";
import VectorRight from "./assets/svg/VectorRight";
import { CircleButton } from "./common/regularComponents";
import { StringState } from "./common/interfaces";
import { useWindowSize, useYOffset } from "./useWindowSize";

function App() {
  const [returnPlace, setReturnPlace] = useState<
    "start" | "catalog" | "prices"
  >("start");
  const [interest, setInterest] = useState<string>("");
  const [name, setName] = useState<StringState>({ value: "", error: false });
  const [phone, setPhone] = useState<StringState>({ value: "", error: false });
  const [width, height] = useWindowSize();
  const y = useYOffset();

  const headerRef = useRef();
  const catalogRef = useRef();
  const pricesRef = useRef();
  const teamRef = useRef();
  const galleryRef = useRef();
  const reviewsRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  const refs: any = {
    start: headerRef,
    catalog: catalogRef,
    prices: pricesRef,
    team: teamRef,
    gallery: galleryRef,
    reviews: reviewsRef,
  };

  const scrollTo = (link?: string, instant?: boolean) => {
    window.scrollTo({
      top:
        typeof link === "string"
          ? refs[link].current.offsetTop - 15
          : document.body.scrollHeight,
      left: 0,
      behavior: instant ? "auto" : "smooth",
    });
  };

  const submitForm = () => {
    if (!name.value || !phone.value) {
      if (!name.value) {
        setName({ value: "", error: true });
      }
      if (!phone.value) {
        setPhone({ value: "", error: true });
      }
    } else {
      setName({ value: "", error: false });
      setPhone({ value: "", error: false });
      setInterest("Successfully sent your reauest");
      setTimeout(() => {
        setInterest("");
      }, 3000);
    }
  };

  return (
    <AppWrapper>
      <CircleButton onClick={() => scrollTo(returnPlace)} appear={y >= 730}>
        <VectorRight />
      </CircleButton>
      <Header
        scrollTo={scrollTo}
        setReturnPlace={setReturnPlace}
        reference={headerRef}
      />
      <Hero
        scrollTo={scrollTo}
        setReturnPlace={setReturnPlace}
        setInterest={setInterest}
      />
      <Clouds>
        <Catalog
          setInterest={setInterest}
          reference={catalogRef}
          scrollTo={scrollTo}
          setReturnPlace={setReturnPlace}
        />
        <Prices
          reference={pricesRef}
          scrollTo={scrollTo}
          setReturnPlace={setReturnPlace}
          setInterest={setInterest}
        />
        <Team reference={teamRef} />
      </Clouds>

      <BackgroundFlowerLeft>
        <Gallery reference={galleryRef} />
        <Reviews reference={reviewsRef} />
      </BackgroundFlowerLeft>
      <Footer
        submitForm={submitForm}
        interest={interest}
        nameReference={nameRef}
        phoneRef={phoneRef}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        setInterest={setInterest}
      />
    </AppWrapper>
  );
}

export default App;
