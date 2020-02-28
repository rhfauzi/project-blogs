import React, { useState, Fragment } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container
} from "reactstrap";

const items = [
  {
    src:
      "https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/slider-2.jpg",
    altText: "Slide 1",
    caption: "Anywhere"
  },
  {
    src:
      "https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/slider-1.jpg",
    altText: "Slide 2",
    caption: "Anytime"
  }
];

const Example = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          className="imgslider"
          src={item.src}
          alt={item.altText}
          style={{ width: "100%" }}
        />
      </CarouselItem>
    );
  });

  return (
    <Fragment>
      <Container className="themed-container mx-0 px-0" fluid={true}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
    </Fragment>
  );
};

export default Example;
