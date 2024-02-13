import React from 'react'
import { Link } from 'react-router-dom'

const ServiceMenu = (props) => {
    const { menuContent = {} } = props
    const { heading, menuList = [] } = menuContent

    return (
        <>
        <div className='service-menu-box'>
            <h6>{heading}</h6>
            <ul>
                {menuList.length > 0 && menuList.map((item, index) => {
                    return <li key={item.title + index}>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
        </>
    )
}

export default ServiceMenu