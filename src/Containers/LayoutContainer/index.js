import React from 'react';
import {
    HeaderComponent,
    FooterComponent,
} from '../../Components';
import 'bootstrap/dist/css/bootstrap.min.css';
const LayoutContainer = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    );
};

export default LayoutContainer;
