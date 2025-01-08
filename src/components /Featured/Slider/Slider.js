import Image from "../Slider/ImageSlider.js";
import Mad from "../../../img/shop.png";




const Slider = () => {

    

    const slides = [
        { url: Mad, title: "Madness Autoworks3" },
        { url: Mad, title: "Madness Autoworks" },
        { url: Mad, title: "Madness Autoworks2" },
    ]

    return (
        <div>
            <div className="slides">
                <Image slides={slides} />
            </div>
        </div>
    );
};

export default Slider;