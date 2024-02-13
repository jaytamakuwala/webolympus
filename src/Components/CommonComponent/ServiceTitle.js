import React from 'react'
import { Link } from 'react-router-dom'
import BtnArrow from '../../Images/btn-arrow.svg';
const ServiceTitle = (props) => {
    const { titleContent = {} } = props
    const { heading, text, btntext, btnlink = [] } = titleContent

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h2>{heading}</h2>
                    </div>
                    <div className='col-lg-6'>
                        <p className='text-white'>{text}</p>
                        <Link className='common-button' to={btnlink}>
                            {btntext}
                            <img src={BtnArrow}></img>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceTitle