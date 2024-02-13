import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    const { titleContent = {} } = props
    const {heading,menuList=[]}=titleContent

    return (
        <>
        <section className='page-title'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>{heading}</h1>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default PageTitle