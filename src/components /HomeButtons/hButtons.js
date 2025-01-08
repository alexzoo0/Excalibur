import React from "react";

import { Container, Grid } from '@material-ui/core';

const HomeButtons = () => {

    return (
    <div>
        <Container >
            <Grid className='intro'>
                <div className='title'>
                    <h1>Excalibur</h1>
                    <h3>Auto Repair</h3>
                    <div className="Talexisbg"></div>
                    <p className='name'>est. 2005</p>
                    <p className='titleP'>Here at Excalibur we provide the best quality services <br/> with our 36 month warranty Nationwide!<br/>Call us today for an appointment, walk-in welcome</p>
                </div>
                
                
            </Grid>
        </Container>
    </div>
    )
}

export default HomeButtons;