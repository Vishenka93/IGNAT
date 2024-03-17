import { sliderImages } from "../../../Consts/sliderImage";
import { useState } from "react";
import "./../../Main/Slider/slider.scss";

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
