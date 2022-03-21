import React from 'react';
// import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

// const useStyle = makeStyles({

//     closeButton: {

//         borderRadius: '50%',
//         border: 'none',
//         fontSize: '20px',
//         color: 'white',
//         background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
//         fontWeight: 'bold',
//         cursor: 'pointer',
//         padding: 'revert',
//     }
// })


function CancelButton(props){

    const onClose = () => {
        props.cerrarModal(false);
    }

    // const classes = useStyle(); 

    return(
        
        <Button variant='outlined' color='primary' fullWidth onClick={() => onClose()}>Close</Button>
    )
}

export { CancelButton };