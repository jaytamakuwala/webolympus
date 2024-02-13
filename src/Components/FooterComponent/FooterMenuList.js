import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenuList = (props) => {
    const { footerContent = {} } = props
    const {heading,menuList=[]}=footerContent

    return (
        <div className='ft-box ft-menu-outer'>
            <h6 className='ftb-title'>{heading}</h6>

            <ul className='ftb-menus'>
                {menuList.length > 0 && menuList.map((item, index) => {
                    return <li key={item.title + index}>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default FooterMenuList