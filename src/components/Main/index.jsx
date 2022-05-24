import React from 'react';
import './main.css';
import { Projects } from '../Projects / index';

function Main (){
    return(
        <React.Fragment>
            <main className='main'>
                <section className="work" id="work">
                    <div className="container">
                        <h2 className="work__title">&#123; Portfolio &#125;</h2>
                        <div className="underline__content">
                            <hr className='underline' />
                        </div>
                    </div>
                        <div className="container container--flex">

                            <Projects href={'https://cesarsuarezwd.github.io/invie/'} img={'https://i.imgur.com/fa6gVYq.png'} alt={'Invie pic'} name={'Invie'} tech={'HTML / CSS / JavaScript'} />

                            <Projects href={'https://cesarsuarezwd.github.io/platto/'} img={'https://i.imgur.com/jYqHT0I.jpg'} alt={'Platto pic'} name={'Platto'} tech={'HTML / CSS'} />

                            <Projects href={'https://cesarsuarezwd.github.io/restaurant/'} img={'https://i.imgur.com/vXJqFM5.png'} alt={'YourRestarurant pic'} name={'Your Restaurant'} tech={'HTML / CSS / JavaScript'} />

                            <Projects href={'https://cesarsuarezwd.github.io/eco/'} img={'https://i.imgur.com/A8ZQXG9.png'} alt={'Eco pic'} name={'Eco'} tech={'HTML / CSS / JavaScript'} />

                            <Projects href={'https://cesarsuarezwd.github.io/platzi-bootstrap/'} img={'https://i.imgur.com/gFPPmlV.png'} alt={'PlatziConf pic'} name={'Platzi Conf'} tech={'HTML / CSS / Bootstrap'} />

                            <Projects href={'https://cesarsuarezwd.github.io/platzi-curso-practico-javascript/'} img={'https://i.imgur.com/bkXukMR.png'} alt={'JavaScript pic'} name={'Curso Práctico JavaScript'} tech={'HTML / CSS / JavaScript'} />

                            <Projects href={'https://cesarsuarezwd.github.io/calculadoraGrafica/'} img={'https://i.imgur.com/dN2J1s2.png'} alt={'GraphicCalc pic'} name={'Calculadora Gráfica'} tech={'HTML / CSS / JavaScript / char.JS'} />

                            <Projects href={'https://cesarsuarezwd.github.io/spacex_project/'} img={'https://i.imgur.com/8G3LJCW.png'} alt={'Space X pic'} name={'SpaceX'} tech={'React / API Rest'} />

                            <Projects href={'https://cesarsuarezwd.github.io/GPT3/'} img={'https://i.imgur.com/E7I9AkG.png'} alt={'GPT3 pic'} name={'GPT3'} tech={'React / CSS'} />

                            <Projects href={'https://cesarsuarezwd.github.io/todo-machine/'} img={'https://i.imgur.com/xy2YDdZ.png'} alt={'TodoMachine pic'} name={'Todo Machine'} tech={'React / CSS'} />

                            <Projects href={'https://gethired-community-c8.vercel.app/'} img={'https://i.imgur.com/kRGXMXD.png'} alt={'GetHired pic'} name={'GetHired'} tech={'React / MaterialUI / Auth0'} />

                            <Projects href={'https://cesarsuarezwd.github.io/redux_react/'} img={'https://i.imgur.com/50gIViw.png'} alt={'Pokedux pic'} name={'Pokedux'} tech={'React / Redux / API Rest'} />
                    
                    </div>
                </section>
                <section className="about skew_about" id="about">
                    <div className="container">
                    <h2 className="about__title">.About Me( )</h2>
                    <div className="underline__content">
                        <hr className="underline" />
                    </div>
                    </div>
                    <div className="container container--flex">
                    <img src="https://i.imgur.com/5h8Ilzp.png" alt="me.png" className="img__about column column--50" />
                    <p className="bio column column--50">I'm a Frontend Developer graduated as Bachelor of Engineering in Computer Systems with one year of experience developing web applications using HTML5, CSS3, JavaScript and React.js. Effective communication skills acquired while working as a content developer on YouTube. I want to collaborate as a Web Developer in teams to create digital products builded with React.js</p>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export { Main };