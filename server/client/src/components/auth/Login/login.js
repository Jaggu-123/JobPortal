import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import LoginUser from "./loginUser";
import LoginCompany from "./loginCompany";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

const login = () => {
    return (
        <div>
            <section
                className="section-hero overlay inner-page bg-image"
                style={style}
                id="home-section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="text-white font-weight-bold">
                                Login
                            </h1>
                            <div className="custom-breadcrumbs">
                                <Link to="/">Home</Link>
                                <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>Log In</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-section">
                <div className="container">
                    <div className="row">
                        <LoginCompany />
                        <LoginUser />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default login;
