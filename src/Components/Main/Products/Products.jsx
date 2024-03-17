import "../Products/products.scss";
import { products } from "../../../Consts/products";
import ReusableSlider from "../../ReusableSlider/ReusableSlider";

function Products() {
    return (
        <section className="page__products products-page">
            <div className="products-page__container">
                <ReusableSlider
                    slides={3}
                    items={products}
                    type={"products"}
                    title={" "}
                />
            </div>
        </section>
    );
}

export default Products;
