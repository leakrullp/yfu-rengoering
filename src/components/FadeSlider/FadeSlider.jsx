import Slider from "react-slick";
import imageIds from "../../assets/data/carousel";
import individual_pieces from "../../assets/data/individuals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FadeSlider() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const selectedImages = individual_pieces.filter((p) =>
    imageIds.includes(p.id),
  );

  return (
    <div
      className="slider-container"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <Slider {...settings}>
        {selectedImages.map((img) => (
          <div key={img.id}>
            <img
              src={img.path}
              alt={img.alt || ""}
              style={{
                width: "100%",
                display: "block",
                maxHeight: "600px", // optional, keeps slides uniform
                objectFit: "cover", // optional, scales image nicely
              }}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FadeSlider;
