import React from "react";
import Navbar from "../Navbar/navbar.js";
import Slider from "../Featured/Slider/Slider.js";
import Footer from "../Footer/footer.js"
import Mad from "../../img/titlebg.svg";

import { Container, Grid } from '@material-ui/core';



import { Box } from '@material-ui/core';
import useStyles from './style.js';

const CLine = () => {
    
    const classes = useStyles();


    return (
        <Box>
            <Navbar />
                <div className="layer4w">
                <Container>
                    <Grid className='intro spacer'>
                        <div className='title'>
                            <div className="Talexisbg"></div>
                            <p class='name titleP'>Alexis Velasquez</p>
                            <h2 style={{color: '#fff37e'}}>Web Development</h2>
                            <p className='titleP'>Now you've check off ui/ux designs and its time to program.<br/>Don't know where to start? let me be your guide on how to properly deply a beautiful custom website</p>
                        </div>
                    </Grid>
                </Container>
            </div>
            <Grid>
            <div className='graphicCard'>
                <div className='graphicTitle'><p>MADNESS AUTOWORKS</p></div>
                    <div className='graphicList'>
                        <div className='Gtitle'>
                            <h3>www.madnessauto.com</h3>
                            <p>I decided to take it a step further and <br/>decided to combine illustartion with <br/>imagery.<br/> <br/>The Process<br/>
                            - Research (competitors, clients)<br/>
                            - Target demographic (age, gender) <br/>
                            - Brand identity (logo, colors, typography) <br/>
                            - Color theory (grayscale, color scheme) <br/><br/>

                            I start on my three sample sketches <br/> based on the process above. <br/><br/>

                            The process: 2hrs <br/>
                            3 samples + mobile versions: 9hrs  </p>
                            <div>
                            <h3>Icons Used</h3>
                        </div>
                        </div>
                        <div className='Glogo'>
                        </div>
                    </div>
                </div>
                <div className='productCard'>
                <Slider />
            </div>
        </Grid>
        <Grid>
            <div className='graphicCard2'>
                <div className='graphicTitle'><p>MADNESS AUTOWORKS</p></div>
                    <div className='graphicList'>
                        <div className='Gtitle'>
                            <h3>MADNESS AUTOWORKS</h3>
                            <p>I decided to take it a step further and <br/>decided to combine illustartion with <br/>imagery.<br/> <br/>The Process<br/>
                            - Research (competitors, clients)<br/>
                            - Target demographic (age, gender) <br/>
                            - Brand identity (logo, colors, typography) <br/>
                            - Color theory (grayscale, color scheme) <br/><br/>

                            I start on my three sample sketches <br/> based on the process above. <br/><br/>

                            The process: 2hrs <br/>
                            3 samples + mobile versions: 9hrs  </p>
                        </div>
                        <div className='flogo'>
                        <img src={Mad} alt='fiat'/>
                        </div>
                    </div>
                </div>
                <div className='GraphicCardLeft'>
                    <Slider />
                </div>
             </Grid>
            <div className='layer2'></div>
            <Footer className={classes.footer} />
        </Box>
    )
}

export default CLine;