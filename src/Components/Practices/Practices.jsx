import { Box, Grid,  } from '@mui/material'
import React from 'react';
import styles from './Practices.module.css';
import business from '../../assets/bussiness.png';
import partnership from '../../assets/partnership.png';
import realEstate from '../../assets/realEstate.png';
import business2 from '../../assets/bussiness2.png';
import landlordDisputes from '../../assets/landlordDisputes.png';
import elderAbuse from '../../assets/elderAbuse.png';


const Practices = () => {
  return (
    <Box className={styles.boxWrapper} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <img src={business} alt="" width="auto" height={200}/>
        </Grid>
        <Grid item xs={4}>
        <img src={partnership} alt="" width="auto" height={200}/>
        </Grid>
        <Grid item xs={4}>
        <img src={realEstate} alt="" height={200}/>
        </Grid>
        <Grid item xs={8}>
        <img src={business2} alt="" height={200}/> 
        </Grid>
        <Grid item xs={8}>
        <img src={landlordDisputes} alt="" height={200}/>
        </Grid>
        <Grid item xs={4}>
        <img src={elderAbuse} alt="" height={200}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Practices