import React from 'react';


import logo from '../../img/Logo.svg'
const Footer = () => {
      return (
            <>
                  {/* <!-- Footer --> */}
                  <footer className="text-center text-lg-start bg-light text-muted">
                        {/* <!-- Section: Social media --> */}

                        {/* <!-- Section: Social media --> */}

                        {/* <!-- Section: Links  --> */}
                        <section className="py-1">
                              <div className="container text-center text-md-start mt-5">
                                    {/* <!-- Grid row --> */}
                                    <div className="row mt-3">
                                          {/* <!-- Grid column --> */}
                                          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                                {/* <!-- Content --> */}
                                                <h6 className="text-uppercase fw-bold mb-4">
                                                      <img src={logo} />
                                                </h6>
                                                <p>
                                                      Sign up for texts to be notified about our best offers on the perfect gifts.
                                                </p>
                                          </div>
                                          {/* <!-- Grid column --> */}

                                          {/* <!-- Grid column --> */}
                                          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                                {/* <!-- Links --> */}
                                                <h6 className="text-uppercase fw-bold mb-4">
                                                      All products
                                                </h6>
                                                <p>
                                                      <a href="#!" className="text-reset">Phones</a>
                                                </p>
                                                <p>
                                                      <a href="#!" className="text-reset">Watch</a>
                                                </p>
                                                <p>
                                                      <a href="#!" className="text-reset">Tablet</a>
                                                </p>
                                                <p>
                                                      <a href="#!" className="text-reset">Laptops</a>
                                                </p>
                                          </div>
                                          {/* <!-- Grid column --> */}

                                          {/* <!-- Grid column --> */}
                                          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                                {/* <!-- Links --> */}
                                                <h6 className="text-uppercase fw-bold mb-4">
                                                      Support
                                                </h6>
                                                <p>
                                                      <a href="#!" className="text-reset">Style Guide</a>
                                                </p>
                                                <p>
                                                      <a href="#!" className="text-reset">Licensing</a>
                                                </p>

                                                <p>
                                                      <a href="#!" className="text-reset">Change Log</a>
                                                </p> 
                                                 <p>
                                                      <a href="#!" className="text-reset">Contact</a>
                                                </p>
                                          </div>


                                          {/* <!-- Grid column --> */}

                                          {/* <!-- Grid column --> */}
                                          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                                {/* <!-- Links --> */}
                                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                                <p>
                                                      <i className="fas fa-envelope me-3"></i>
                                                      info@example.com
                                                </p>
                                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                          </div>
                                          {/* <!-- Grid column --> */}
                                    </div>
                                    {/* <!-- Grid row -->/ */}
                              </div>
                        </section>
                        {/* <!-- Section: Links  --> */}

                        {/* <!-- Copyright --> */}
                        <div className="text-center p-4" >
                              © {new Date().getFullYear()} Copyright:
                              <a className="text-reset fw-bold text-decoration-none" href="https://t.me/Mr_Mellogang"> ×͜× Marshmello ×͜×</a>
                        </div>
                        {/* <!-- Copyright --> */}
                  </footer>
                  {/* <!-- Footer --> */}
            </>
      );
};

export default Footer;