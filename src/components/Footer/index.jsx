import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Tooltip } from '@mui/material';
import Modal from '../Modal/index';
import { Form } from '../Form/index';
import { CancelButton } from '../CancelButton/index';
import './footer.css';
import '../responsive.css';


function Footer(){

    const handleClick = ()=>{
        window.open("https://drive.google.com/file/d/1mhgoNfVf5AKEiK5s2HPDM-4KjdEMInbF/view?usp=sharing");
    }
    const [showModal, setShowModal] = useState(false);

    return(
        <React.Fragment>
            <footer className="footer skew_footer" id="footer">
                <div className="container container--flex container--footer">
                    
                    <div className="column column--33">
                        <div className="contact">
                            <p className="contactme"><a href="contacto.html" className="contact__link">CONTACT</a></p>
                            <p className="vineta phone"><a href="tel:+573005296462"><LocalPhoneIcon className="icon-phone" />+573005296462</a></p>
                            <p className="vineta mail"><a href="mailto:cesarsuarezmedina@gmail.com"><EmailIcon className="icon-mail" />cesarsuarezmedina@gmail.com</a></p>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51641075435!2d-74.24789377420298!3d4.648283717348672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1646332842169!5m2!1ses-419!2sco" width="800" height="600" loading="lazy"></iframe> */}
                        </div>
                    </div>

                    <div className="column column--33">
                        <div className="social__media">
                            <p className="social">SOCIAL MEDIA</p>
                            <div className="social-icon">
                                <Tooltip title='Twitter' arrow><a href="https://twitter.com/TutoSuarezDev" className="social-icon__link" target="_blank" rel="noreferrer"><TwitterIcon className="icon-twitter" /></a></Tooltip>
                                <Tooltip title='LinkedIn' arrow><a href="https://www.linkedin.com/in/cesarsuarezmedina/" className="social-icon__link" target="_blank" rel="noreferrer"><LinkedInIcon className="icon-linkedin" /></a></Tooltip>
                                <Tooltip title='GitHub' arrow><a href="https://github.com/CesarSuarezWD" className="social-icon__link" target="_blank" rel="noreferrer"><GitHubIcon className="icon-github" /></a></Tooltip>
                                <Tooltip title='Youtube' arrow><a href="https://www.youtube.com/channel/UC071I22KsDkEVrwowlwTTEQ?sub_confirmation=1" className="social-icon__link" target="_blank" rel="noreferrer"><YouTubeIcon className="icon-youtube" /></a></Tooltip>
                                {/* <a href="https://www.instagram.com/tuto_suarez" className="social-icon__link" target="_blank" rel="noreferrer"><span className="icon-instagram"></span></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="column column--33">
                        <div className="site__map">
                            <p className="site">SITEMAP</p>
                            <nav className="menu__footer">
                                <ul>
                                    <li><a href="#work" className="menu__link menu__link--select"> <span className='coding'>&#96;&#36;&#123;</span> Portfolio <span className='coding'>&#125;</span></a></li>
                                    <li><a href="#about" className="menu__link"><span className='coding'>&#36;&#123;</span> About Me <span className='coding'>&#125;</span></a></li>
                                    <li><a onClick={() => setShowModal(true)} className="menu__link"><span className='coding'>&#36;&#123;</span> Let's Talk! <span className='coding'>&#125;&#96;</span></a></li>
                                    <Modal show={showModal} onClose={() => setShowModal(false)}>
                                        <Form>
                                        <CancelButton cerrarModal={setShowModal} />
                                        </Form>
                                    </Modal>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <Tooltip title='UP!' arrow><a href="#" className="down"><KeyboardDoubleArrowUpIcon className="fa fa-angle-up" aria-hidden="true"/></a></Tooltip>
                </div>
             </footer>
        </React.Fragment>
    )
}

export { Footer };