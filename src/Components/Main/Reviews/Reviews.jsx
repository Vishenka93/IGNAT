import "../Reviews/reviews.scss";
import { reviews } from "../../../Consts/reviews";
import ReusableSlider from "../../ReusableSlider/ReusableSlider";

function Rewiews() {
    return (
        <section className="page__reviews reviews-page">
            <div className="reviews-page__container">
                <ReusableSlider
                    slides={4}
                    items={reviews}
                    type={"reviews"}
                    title={"Відгуки"}
                />
            </div>
        </section>
    );
}

export default Rewiews;
