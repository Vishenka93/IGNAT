import { sliderImages } from "../../../consts/sliderImage";
import { useState } from "react";
// import arrowLeft from "../../../assets/img/main/arrowLeft.svg";

// console.log(sliderImages);
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1
        );
    };
    return (
        <div className="home-page__slider slider">
            <button
                className="home-page__slider-left"
                onClick={prevSlide}
            ></button>
            <img
                className="home-page__slide"
                src={sliderImages[currentSlide]}
                alt="Slide"
            />
            <button
                className="home-page__slider-right"
                onClick={nextSlide}
            ></button>
        </div>
    );
}

export default Slider;
