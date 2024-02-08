import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const titleStyle = {
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "black"
    // Ajoutez d'autres styles si nécessaire
  };
  const descStyle = {
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "#A27700"
    // Ajoutez d'autres styles si nécessaire
  };

  return (
    <section className='homeSlide'>
      <Container>
        <Slider {...settings}>
          {SliderData.map((value, index) => (
            <SlideCard
              key={index}
              title={<h2 style={titleStyle}>{value.title}</h2>}
              cover={value.cover}

              desc={<p style={descStyle}>{value.desc}</p>}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;
