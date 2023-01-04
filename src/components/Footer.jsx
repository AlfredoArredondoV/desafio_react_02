import React from 'react'
import './Footer.css';

const Footer = (props) => {
    return (
        <div>
            <p className='footerPage'>{props.titulo}</p>
        </div>
    )
}

export default Footer