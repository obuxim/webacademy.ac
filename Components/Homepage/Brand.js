import React from 'react'
import Slider from 'react-slick';

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        <>
    <section>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="sec-heading center">
                <p>New &amp; Trending</p>
                <h2><span className="theme-cl">Awarding Bodies</span></h2>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-md-12">
                <Slider {...settings} className="single_brand" id="brand-slide">
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                <div className="single_brands">
                    <img src="https://via.placeholder.com/200x65" className="img-fluid" alt />
                </div>
                </Slider>
            </div>
            </div>
        </div>
        </section>

        </>
    )
}

export default Brand
