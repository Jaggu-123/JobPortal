import React, { Component } from "react";
import { Link } from "react-router-dom";

class Stuff extends Component {
    render() {
        return (
            <div>
                <section className="py-5 bg-image overlay-primary fixed overlay">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h2 class="text-white">Looking For A Job?</h2>
                                <p class="mb-0 text-white lead">
                                    Here Is Your Gateway to Your Glorious
                                    Future! Join Now{" "}
                                </p>
                            </div>
                            <div class="col-md-3 ml-auto">
                                <Link
                                    to="/registerUser"
                                    className="btn btn-warning btn-block btn-lg"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="site-section py-4">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12 text-center mt-4 mb-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-7">
                                        <h2 class="section-title mb-2">
                                            Companies We Have Helped
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_mailchimp.svg"
                                    alt="Image"
                                    class="img-fluid logo-1"
                                />
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_paypal.svg"
                                    alt="Image"
                                    class="img-fluid logo-2"
                                />
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_stripe.svg"
                                    alt="Image"
                                    class="img-fluid logo-3"
                                />
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_visa.svg"
                                    alt="Image"
                                    class="img-fluid logo-4"
                                />
                            </div>

                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_apple.svg"
                                    alt="Image"
                                    class="img-fluid logo-5"
                                />
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_tinder.svg"
                                    alt="Image"
                                    class="img-fluid logo-6"
                                />
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_sony.svg"
                                    alt="Image"
                                    class="img-fluid logo-7"
                                />
                            </div>
                            <div class="col-6 col-lg-3 col-md-6 text-center">
                                <img
                                    src="images/logo_airbnb.svg"
                                    alt="Image"
                                    class="img-fluid logo-8"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Stuff;
