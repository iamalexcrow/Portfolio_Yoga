import React from "react";
import { Container, Wrapper } from "./styled";
import Gallery from "react-photo-gallery";
import BlockWrapper from "../../Components/BlockWrapper";
import { useWindowSize } from "../../useWindowSize";

const photos = [
  {
    src: "./gallery/01.jpeg",
    width: 1,
    height: 1,
  },
  {
    src: "./gallery/02.jpeg",
    width: 5466,
    height: 3644,
  },
  {
    src: "./gallery/03.jpeg",
    width: 4,
    height: 6,
  },
  {
    src: "./gallery/04.jpeg",
    width: 6630,
    height: 5304,
  },
  {
    src: "./gallery/05.jpeg",
    width: 5472,
    height: 3648,
  },
  {
    src: "./gallery/06.jpeg",
    width: 3733,
    height: 5599,
  },
  {
    src: "./gallery/07.jpeg",
    width: 3000,
    height: 1997,
  },
  {
    src: "./gallery/08.jpeg",
    width: 4272,
    height: 2848,
  },
  {
    src: "./gallery/09.jpeg",
    width: 9912,
    height: 8172,
  },
  {
    src: "./gallery/10.jpeg",
    width: 3333,
    height: 2498,
  },
  {
    src: "./gallery/11.jpeg",
    width: 3000,
    height: 4509,
  },
  {
    src: "./gallery/12.jpeg",
    width: 2134,
    height: 3200,
  },
];

const GalleryBlock = ({
  reference,
}: {
  reference: React.MutableRefObject<undefined>;
}) => {
  const [width] = useWindowSize();
  return (
    <Wrapper ref={reference}>
      <BlockWrapper title="Gallery">
        <Container>
          <Gallery photos={width > 850 ? photos : photos.slice(0, 6)} />
        </Container>
      </BlockWrapper>
    </Wrapper>
  );
};

export default GalleryBlock;
