import React from 'react'
import BigBtnArrow from '../../Images/big-btn-arrow.svg';
import { Link } from 'react-router-dom';

const MainHeader = (props) => {
    const {
        mainHeading = 'TELL US ABOUT YOUR PROJECT',
        title = '',
        btnText = '',
        btnLink = ''
    } = props

    return (
        <section className='cta-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cta-wrap text-center'>
                            <span>{mainHeading}</span>
                            <h2 dangerouslySetInnerHTML={{ __html: (title) }}></h2>
                            <Link to={btnLink} className="big-btn">{btnText}<img src={BigBtnArrow}></img></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHeader