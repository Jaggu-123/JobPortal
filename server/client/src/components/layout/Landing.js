import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
    backgroundImage: `url("images/ab.jpg")`
};

class Landing extends Component {
    render() {
        return (
            <div>
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
                                        The Easiest Way To Get Your Dream Job{" "}
                                        <br />
                                    </h1>
                                    <p>
                                        <h3 className="text-white font-weight">
                                            Let the top employers of your
                                            industry reach you. Register on
                                            JobAdda for free!
                                        </h3>
                                        <a className="spepcial_link text-white" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;
