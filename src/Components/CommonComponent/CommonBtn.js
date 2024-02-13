import React from 'react'
import { Link } from 'react-router-dom'
import BtnArrow from '../../Images/btn-arrow.svg';

const CommonBtn = (props) => {
    const { titleContent = {} } = props
    const {heading, link=[]}=titleContent

    return (
        <>
        <Link className='common-button' to={link}>
            {heading}
            <img src={BtnArrow}></img>
        </Link>
        </>
    )
}

export default CommonBtn