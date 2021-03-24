import React from 'react'

const Newsletter = () => {
    return (
        <>
     <section className="newsletter theme-bg inverse-theme">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8 col-sm-12">
                <div className="text-center">
                <h2>Join to Get Regular Update</h2>
                <p>Subscribe with us</p>
                <form className="sup-form">
                    <input type="email" className="form-control sigmup-me" placeholder="Your Email Address" required="required" />
                    <input type="submit" className="btn btn-theme" defaultValue="Get Started" />
                 </form>
                </div>
              </div>
            </div>
          </div>
      </section>
        </>
    )
}

export default Newsletter
