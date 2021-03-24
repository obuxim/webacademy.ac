import React from 'react'
import Slider from 'react-slick';

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
<section style={{background: 'url(assets/img/testimonial.png)'}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="sec-heading center">
          <p>Reviews </p>
          <h2>By Our <span className="theme-cl">Successful</span> Students</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Slider {...settings} id="testimonials_style" className="slick-carousel-3 arrow_middle">
          <div className="testimonial-detail">
            <div className="client-detail-box">
              <div className="pic">
                <img src="/assets/img/rv.png" alt />
              </div>
              <div className="client-detail">
                <h3 className="testimonial-title">Adam Alloriam</h3>
                <span className="post">Web Developer</span>
              </div>
            </div>
            <p className="description">
              " great courses to master web designing. recommended "
            </p>
          </div>
          <div className="testimonial-detail">
            <div className="client-detail-box">
              <div className="pic">
                <img src="/assets/img/rv.png" alt />
              </div>
              <div className="client-detail">
                <h3 className="testimonial-title">Illa Millia</h3>
                <span className="post">Project Manager</span>
              </div>
            </div>
            <p className="description">
              " Loved attending the courses. step-by-step training on all the designing aspects "
            </p>
          </div>
          <div className="testimonial-detail">
            <div className="client-detail-box">
              <div className="pic">
                <img src="/assets/img/rv.png" alt />
              </div>
              <div className="client-detail">
                <h3 className="testimonial-title">Rout Millance</h3>
                <span className="post">Web Designer</span>
              </div>
            </div>
            <p className="description">
              " well organised course modules. worth trying. "
            </p>
          </div>
          <div className="testimonial-detail">
            <div className="client-detail-box">
              <div className="pic">
                <img src="/assets/img/rv.png" alt />
              </div>
              <div className="client-detail">
                <h3 className="testimonial-title">williamson</h3>
                <span className="post">Web Developer</span>
              </div>
            </div>
            <p className="description">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam unde voluptatum eligendi facilis itaque minus non odio, quaerat ullam unde ? "
            </p>
          </div>
        </Slider>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Testimonial
