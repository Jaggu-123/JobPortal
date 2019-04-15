import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class registerUser extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    }

    render() {
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
                                    Register as company
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>
                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Register as company</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2>Register as company</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-light btn-md"
                                        >
                                            <span className="icon-open_in_new mr-2" />
                                            Preview
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-primary btn-md"
                                        >
                                            Save Job
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <form
                                    className="p-4 p-md-5 border rounded"
                                    method="post"
                                >
                                    <h3 class="text-black my-5 border-bottom pb-2">
                                        Company Details
                                    </h3>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder="e.g. New York"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-tagline">
                                            Tagline (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-tagline"
                                            placeholder="e.g. New York"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="job-description">
                                            Company Description (Optional)
                                        </label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"
                                            class="form-control"
                                        >
                                            Description
                                        </textarea>
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website">
                                            Website (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-website"
                                            placeholder="https://"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website-fb">
                                            Facebook Username (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-website-fb"
                                            placeholder="companyname"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website-tw">
                                            Twitter Username (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-website-tw"
                                            placeholder="@companyname"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-website-tw">
                                            Linkedin Username (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-website-tw"
                                            placeholder="companyname"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-website-tw d-block">
                                            Upload Logo
                                        </label>
                                        <br />
                                        <label class="btn btn-primary btn-md btn-file">
                                            Browse File
                                            <input type="file" hidden />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-light btn-md"
                                        >
                                            <span className="icon-open_in_new mr-2" />
                                            Preview
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-primary btn-md"
                                        >
                                            Save Job
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default registerUser;
