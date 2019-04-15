import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class Landing extends Component {
    render() {
        return (
            <section
                className="home-section section-hero overlay bg-image"
                style={style}
                id="home-section"
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12">
                            <div className="mb-5 text-center">
                                <h1 className="text-white font-weight-bold">
                                    The Easiest Way To Get Your Dream Job
                                </h1>
                                <p>
                                    A fresh new free template handcrafted by the
                                    fine folks
                                    <a
                                        href="https://free-template.co/"
                                        target="_blank"
                                        className="spepcial_link text-white"
                                    >
                                        Free-Template.co
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;
