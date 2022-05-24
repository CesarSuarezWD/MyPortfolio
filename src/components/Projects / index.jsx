import React from 'react'

function  Projects({href, img, alt, name, tech}) {
  return (
    <section className="column column--50">
        <div className="work__content">
            <a href={href} target="_blank" rel="noreferrer">
                <div className="gradient__overlay">
                    <img src={img}  alt={alt} className="img__work" />
                    <div className="work__overlay"></div>
                    <h3 className="title__product">{name}</h3>
                    <div className="look__page">{tech}<br></br><br></br>See the original page &#8658;</div>
                </div>
            </a>
        </div>
    </section>
  )
}

export  { Projects };