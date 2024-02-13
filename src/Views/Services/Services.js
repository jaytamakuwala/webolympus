import React from 'react';
import { LayoutContainer } from '../../Containers';
import './Services.css'
import PageTitle from '../../Components/CommonComponent/PageTitle';
import ServiceTitle from '../../Components/CommonComponent/ServiceTitle';
import ServiceMenu from '../../Components/CommonComponent/ServiceMenu';
import webDesignIcon from '../../Images/web-design-icon.svg';
import webReDesignIcon from '../../Images/web-redesign-img.svg';
let pageTitle = {
    heading: 'Services.',
}
let WebDesign = {
    heading: 'Services.',
    text: 'From ideation to graphicdesign, UX/UI design is the historical discipline of our agency.',
    btntext: 'LEARN MORE',
    btnlink:"/"
}
let Webredesign = {
    heading: 'Web Redesign',
    text: 'From ideation to graphicdesign, UX/UI design is the historical discipline of our agency.',
    btntext: 'LEARN MORE',
    btnlink:"/"
}
let Development = {
    heading: 'Web Redesign',
    text: 'Fluidity, performance and creative development are what we live for.',
    btntext: 'LEARN MORE',
    btnlink:"/"
}
let Seo = {
    heading: 'SEO',
    text: 'The key to reaching, converting and retaining your users: the right message in the right place at the right time.',
    btntext: 'LEARN MORE',
    btnlink:"/"
}

let ux = {
    heading:'UX',
    menuList:[
        {title:"UX Audit",link:"/"},
        {title:"Wireframes",link:"/"},
        {title:"User flows",link:"/"},
        {title:"Prototyping",link:"/"},
    ]
}
let websites = {
    heading:'Websites',
    menuList:[
        {title:"Wireframes",link:"/"},
        {title:"Art Direction",link:"/"},
        {title:"Responsive",link:"/"},
        {title:"Mobile first",link:"/"},
        {title:"UI Kit",link:"/"},
    ]
}
let fullstack = {
    heading:'Full Stack',
    menuList:[
        {title:"Integration",link:"/"},
        {title:"Front-end",link:"/"},
        {title:"Back-end",link:"/"},
    ]
}
let cms = {
    heading:'CMS',
    menuList:[
        {title:"Webflow",link:"/"},
        {title:"Prismic (Slice Machine)",link:"/"},
        {title:"Ghost",link:"/"},
        {title:"Strapi",link:"/"},
    ]
}
let apis = {
    heading:'Api’s',
    menuList:[
        {title:"Stripe, Paypal...",link:"/"},
        {title:"Zendesk, Hubspot, Algolia, Twilio, Intercom...",link:"/"},
        {title:"Vimeo, Youtube, Ausha...",link:"/"},
        {title:"Mapbox, Google Map...",link:"/"},
        {title:"Mailchimp, Sendinblue...",link:"/"},
    ]
}
let optimisation = {
    heading:'Optimisation',
    menuList:[
        {title:"Search engine rankings",link:"/"},
        {title:"Organic traffic",link:"/"},
        {title:"Online visibility",link:"/"},
    ]
}
const Services = () => {
    return (
        <>
            <LayoutContainer>
                <PageTitle titleContent={pageTitle} />
                <section className='pt-0 service-section'>
                    <ServiceTitle titleContent={WebDesign} />
                    <div className='container mt-lg-5 pt-lg-5 mt-md-5 mt-3'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={ux} />
                            </div>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={websites} />
                            </div>
                            <div className='col-md-4 text-md-end text-center'>
                                {/* <ServiceMenu menuContent={ux} /> */}
                                <img className='service-img' src={webDesignIcon}></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pt-lg-5 pt-3 service-section'>
                    <ServiceTitle titleContent={Webredesign} />
                    <div className='container mt-lg-5 pt-lg-5 mt-md-5 mt-3'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={ux} />
                            </div>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={websites} />
                            </div>
                            <div className='col-md-4 text-md-end text-center'>
                                {/* <ServiceMenu menuContent={ux} /> */}
                                <img className='service-img' src={webReDesignIcon}></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pt-lg-5 pt-3 service-section'>
                    <ServiceTitle titleContent={Development} />
                    <div className='container mt-lg-5 pt-lg-5 mt-md-5 mt-3'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={fullstack} />
                            </div>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={cms} />
                            </div>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={apis} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pt-lg-5 pt-3 service-section pb-lg-4 pb-0'>
                    <ServiceTitle titleContent={Seo} />
                    <div className='container mt-lg-5 pt-lg-5 mt-md-5 mt-3'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <ServiceMenu menuContent={optimisation} />
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutContainer>
        </>
    );
};

export default Services;
