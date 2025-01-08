import { Grid } from '@material-ui/core';
import Slider from "./Slider/Slider.js";





const Featured = () => {

    return (
        <Grid>
            <div className='featuredbg'>
                <div className='featuredTitle'><p>About Us</p></div>
                <div className='featuredList'>
                    <div className='ftitle'>
                        <h3>Excalibur Auto Repair</h3>
                        <p>At Excalibur Auto Repair, we take pride in offering expert auto repair services designed to keep your vehicle running at its best. From routine maintenance to complex repairs, our skilled technicians provide top-notch service for all makes and models. Whether it's a brake issue, engine diagnostic, oil change, or anything in between, we’ve got you covered.<br />

                            With a commitment to honesty, affordability, and customer satisfaction, Excalibur Auto Repair is your trusted partner for all your automotive needs. Visit us today and experience the difference in service and care that sets us apart!At Excalibur Auto Repair, we take pride in offering expert auto repair services designed to keep your vehicle running at its best. From routine maintenance to complex repairs, our skilled technicians provide top-notch service for all makes and models. Whether it's a brake issue, engine diagnostic, oil change, or anything in between, we’ve got you covered.

                            With a commitment to honesty, affordability, and customer satisfaction, Excalibur Auto Repair is your trusted partner for all your automotive needs. Visit us today and experience the difference in service and care that sets us apart! </p>
                    </div>
                    <div className='productCard'>
                        <Slider />
                    </div>
                </div>
            </div>

        </Grid>

    )

}

export default Featured;