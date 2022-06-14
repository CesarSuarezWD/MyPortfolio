import React, { useState } from "react";
import { NavbarStyles } from "../../styles/NavbarStyles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Modal from '../Modal/index';
import { Form } from '../Form/index';
import { CancelButton } from "../CancelButton/index";

const useStyle = makeStyles({
  reportButton: {
    background: 'linear-gradient(90deg,#ae4eff,#5f64ff)'
  },
  modal: {
    background: 'rgba(32, 35, 41, .8)',
    position: 'fixed',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    display: 'flex',
    justifycontent: 'center',
    alignitems: 'center',
    color: 'white',
    zindex: '2'
  }
});

function Navbar({ closeMenu, unlockMenu, open}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: 'rgba(255,127,80,0.6)',
      },
      third:{
        main: '#ff7f50',
      },
    },
  });

  const handleClick = ()=>{
    window.open("https://drive.google.com/file/d/1dI_RgRw3qYOiUSDVX0EqGRjtapU41UBl/view?usp=sharing");
  }
  
  const [showModal, setShowModal] = useState(false);

  return (
    <NavbarStyles open={open}>
      <a href="#work" onClick={() => { unlockMenu(); closeMenu();}}>.Portfolio( )</a>
      <a href="#about" onClick={() => { unlockMenu(); closeMenu();}}>.About Me( )</a>
      <a onClick={() => setShowModal(true)}>.Contact( )</a>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Form>
          <CancelButton cerrarModal={setShowModal} />
        </Form>
      </Modal>
      <ThemeProvider theme={theme}>
        <Button onClick={() => { unlockMenu(); closeMenu(); handleClick();}} target="_blank" rel="noopener noreferrer" variant="outlined" color='primary' sx={{margin: '0.5rem 2rem 0.5rem 1rem', fontSize: 14.4, border:1, width: 70, color: '', ':hover': {bgcolor: 'secondary.main', color: 'white',},}}>Resume</Button>
      </ThemeProvider>
    </NavbarStyles>
  );
}

export default Navbar;