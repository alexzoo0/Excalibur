import React from 'react';
import { Grid } from '@material-ui/core';


import Navbar from '../Navbar/navbar.js';
import HomeButtons from '../HomeButtons/hButtons.js';
import Form from '../Form/form.js';
import Footer from '../Footer/footer.js';
import Featured from '../Featured/Feature.js';
import ThreeD from '../../components /3dDesign/3d.js';





const Home = () => {




  return (

    <Grid>
      <div> <Navbar /> </div>
      <div className='bg'>
        <div className='bg2'> <HomeButtons /> </div>
      </div>
      <div className='bg'>
        <div className='three'></div>
      </div>
      <Featured />
      <div>
        <ThreeD />
      </div>
      <div className='logo2div'>
        <div> <Form /> </div>
        <div className='logo'></div>
      </div>
      <div className='layer2'></div>
      <div> <Footer /> </div>
    </Grid>
  )

}

export default Home;