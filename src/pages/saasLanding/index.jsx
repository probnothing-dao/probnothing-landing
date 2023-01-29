import { Link } from 'react-router-dom'
import './style.scss'
import HeroImage from './assets/hero_image.png'
import ProbNothingLogo from './assets/prob-nothing-logo.png'
import BrandSection from '../../components/brandSection'
import FeatureCards from '../../components/featureCards'
import TestimonialCards from '../../components/testimonialCards'
import Helmet from 'react-helmet'
import Footer from '../../components/footer'
import ContactSection from '../../components/contactSection'
import NavBar from '../../components/navbar'

const SaasLanding = () => {
    return(
        <>
            <Helmet>
                <title>Prob Nothing - A decentralized workspace for everyone</title>
            </Helmet>
            <div className="saas-landing">
                <Hero/>
                <Features />
                {/* <Showcase /> */}
                {/* <Testimonials /> */}
                <Contact />
                {/* <Footer/> */}
            </div>
        </>
    )
}

const Hero = () => {

    const brands = [
        {
            name: "brand1",
            imgUrl: "assets/brand1.svg"
        },
        {
            name: "brand2",
            imgUrl: "assets/brand2.svg"
        },
        {
            name: "brand3",
            imgUrl: "assets/brand3.svg"
        },
        {
            name: "brand4",
            imgUrl: "assets/brand4.svg"
        },
        {
            name: "brand5",
            imgUrl: "assets/brand5.svg"
        }
    ]

    return(
        <>
            <section className="section-global no-border">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <img src={ProbNothingLogo} className="img-fluid" alt="saas_app" />
                            <h1>Decentralized workspaces for everyone</h1>
                            <p className='txt-1 mt-16 me-lg-5'>Create teams, work on projects, manage your treasury, and publish ideas.</p>
                            {/* <form className='mt-20 me-lg-5'>
                                <div className="cta-form d-flex align-items-center justify-content-between">
                                    <div className="cta-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                    </div>
                                    <div className="cta-btn">
                                        <button type="submit" className="btn btn-primary btn-lg">Request Early Access</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <img src={HeroImage} className="img-fluid" alt="saas_app" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <BrandSection brands={brands} src={'saasLanding'} light /> */}
        </>
    )
}

const Features = () => {

    const featurs_data = [
        {
            title: 'Private / Public Workspaces',
            text: 'Create unlimited workspaces and invite others to collaborate on projects privately or publicly.',
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            title: 'Grow your Treasury',
            text: 'Grow your projects treasury by making investment decisions as a group or individually.',
            icoUrl: 'assets/service_ico1.svg'
        },
        {
            title: 'Publish your Ideas',
            text: 'Publish your ideas to our marketplace to attract users and investors to your project.',
            icoUrl: 'assets/service_ico2.svg'
        }
    ]

    return(
        <>
            <section className='section-global bg-shade-pink'>
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Features</div>
                            <h2>Accelerate with communities and grow your decentralized treasury</h2>
                        </div>
                    </div>
                    <div className="row gy-4 gx-0 gx-lg-5">
                        <FeatureCards data={featurs_data} src='saasLanding' center/>
                    </div>
                </div>
            </section>
        </>
    )
}

const Showcase = () => {
    return(
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row gy-4 gx-0 gx-lg-5">
                        <div className="col-lg-6">
                            <img src={require('./assets/showcase1.png')} className="img-fluid" alt="feature1" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Collaborations</div>
                            <h2 className='mb-16 display-2'>Manage your team effortlessly with live collaborations</h2>
                            <p className='txt-1'>Innovate anywhere with Stace. We make it easy for you to live and work remotely, with a private office away from your home and real-time collaboration tools.</p>
                        </div>
                    </div>
                    <div className="row gy-4 gx-0 gx-lg-5 feature-row-margin">
                        <div className="col-lg-6 order-1 order-lg-0 align-self-center">
                            <div className="section-tag mb-8">Automations</div>
                            <h2 className='mb-16 display-2'>Make your work easier with integrations</h2>
                            <p className='txt-1'>Innovate anywhere with Stace. We make it easy for you to live and work remotely, with a private office away from your home and real-time collaboration tools.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={require('./assets/showcase2.png')} className="img-fluid" alt="feature2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Testimonials = () => {

    const testimonial_data = [
        {
            brandImgUrl: 'assets/review_brand1.svg',
            text: 'Love the product and the service, and the customer care team is awesome. The features are great, too--everything that you need.',
            userName: 'Mary Edwards',
            position: 'Product director',
            userImgUrl: 'assets/review_user1.svg'
        },
        {
            brandImgUrl: 'assets/review_brand2.svg',
            text: 'I recommend this product because it benefits everyone. You will be able to stay connected with your team and clients from all over the world.',
            userName: 'Felisa Rincon',
            position: 'Head of Product',
            userImgUrl: 'assets/review_user2.svg'
        },
        {
            brandImgUrl: 'assets/review_brand3.svg',
            text: 'I was able to get a fully functional online office space that included all the software we needed and it was super cheap!',
            userName: 'Eunice Kennedy',
            position: 'Product director',
            userImgUrl: 'assets/review_user3.svg'
        }
    ]

    return(
        <>
            <section className='section-global bg-shade-green'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Customer reviews</div>
                            <h2>Adopted by the most creative individuals</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all reviews
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} src="saasLanding" />
                    </div>
                </div>
            </section>
        </>
    )
}

// const Contact = () => {
//     return(
//         <>
//             <style jsx="true">
//                 {`
//                     .contact-section h2{                        
//                         max-width: 350px;
//                         display: block;
//                         margin-left: auto;
//                         margin-right: auto;
//                     }  
//                 `}
//             </style>
//             <section className='section-global contact-section'>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2  py-lg-5 px-lg-5 text-center">
//                             <h2 className='mb-16'>Get started with Stact today!</h2>
//                             <p className='txt-1 mb-20'>Join Stact, the fastest growing remote workspace platform, and increase your creativity and productivity</p>
//                             <Link to='/pricing' className='btn btn-primary btn-lg'>Try for free</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                             <Link to='/contact' className='btn btn-outline-primary btn-lg'>Contact sales</Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

const Contact = () => {

    const contact_data = {
            title_before: 'Get started with',
            title_highlight: "ProbNothing!",
            title_after: '',
            text: "The best remote workspace platforms for global communities.",
            cta_1_link: '/pricing',
            cta_2_link: '/contact'
        }

    return(
        <>
            <ContactSection contact_data={contact_data} saasVarient={false} />
        </>
    )
}

export default SaasLanding