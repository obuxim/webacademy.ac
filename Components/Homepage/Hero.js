import React from 'react'

const Hero = () => {
    return (
        <>
        <div className="image-cover hero_banner shadow rlt bg-light" style={{background: '#ffffff'}} data-overlay={0}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="banner-search-2 transparent">
                    <h1 style={{color: '#242f65'}} className="big-header-capt cl_2 mb-2 f_2">Learn to create the perfect front design for your website</h1>
                    <p style={{color: '#647b9c'}}>Master amazing frontend designing expertise &amp; Enhancing your core creative and technical skills</p>
                    <div className="mt-4">
                        <a href="#" className="btn btn-modern dark">Join Us<span><i className="ti-arrow-right" /></span></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="flixio pt-5">
                    <img className="img-fluid" src="/assets/img/hero.png" alt />
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Hero
