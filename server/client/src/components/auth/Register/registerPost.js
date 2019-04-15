import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class registerPost extends Component {
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
                                    Post a Job
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>
                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Post a Job</strong>
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
                                        <h2>Post A Job</h2>
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
                                    <h3 className="text-black mb-5 border-bottom pb-2">
                                        Job Details
                                    </h3>

                                    <div className="form-group">
                                        <label for="company-website-tw d-block">
                                            Upload Featured Image
                                        </label>
                                        <br />
                                        <label className="btn btn-primary btn-md btn-file">
                                            Browse File
                                            <input type="file" hidden />
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="you@yourdomain.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="job-title">Job Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="job-title"
                                            placeholder="Product Designer"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="job-location">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="job-location"
                                            placeholder="e.g. New York"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label for="job-region">
                                            Job Region
                                        </label>
                                        <select
                                            className="selectpicker border rounded"
                                            id="job-region"
                                            data-style="btn-black"
                                            data-width="100%"
                                            data-live-search="true"
                                            title="Select Region"
                                        >
                                            <option>Anywhere</option>
                                            <option>San Francisco</option>
                                            <option>Palo Alto</option>
                                            <option>New York</option>
                                            <option>Manhattan</option>
                                            <option>Ontario</option>
                                            <option>Toronto</option>
                                            <option>Kansas</option>
                                            <option>Mountain View</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="job-type">Job Type</label>
                                        <select
                                            className="selectpicker border rounded"
                                            id="job-type"
                                            data-style="btn-black"
                                            data-width="100%"
                                            data-live-search="true"
                                            title="Select Job Type"
                                        >
                                            <option>Part Time</option>
                                            <option>Full Time</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="job-description">
                                            Job Description
                                        </label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"
                                            className="form-control"
                                            placeholder="Write Job Description"
                                        />
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

export default registerPost;
