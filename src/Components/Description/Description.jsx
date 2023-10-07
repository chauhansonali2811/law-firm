import React from 'react';
import img from '../../assets/image.png'
import styles from "./Description.module.css";
import InputAdornment from '@mui/material/InputAdornment';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';


const Description = () => {
  return (
    <div className={styles.container}>
        <div>
            <h2>You don’t have to </h2>
            <h1>Fight them Alone.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                 curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, 
                 hac massa gravida arcu interdum proin curae.</p>
                 <TextField className={styles.inputButton}
                 placeholder='Enter your email address'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button className={styles.button}>Button</Button>
            </InputAdornment>
          ),
        }}
      /> 
                    
        </div>
        <div>
            <img src={img} alt="description" width={467} height={400} />
        </div>
    </div>
  )
}

export default Description