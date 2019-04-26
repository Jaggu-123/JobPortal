import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerCompany } from "../../../actions/authActionsCompany";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class RegisterCompany extends Component {
    constructor() {
        super();
        this.state = {
            companyName: "",
            userName: "",
            email: "",
            pass: "",
            bussinessStream: "",
            description: "",
            weburl: ""
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
            companyName: this.state.companyName,
            userName: this.state.userName,
            email: this.state.email,
            pass: this.state.pass,
            bussinessStream: this.state.bussinessStream,
            description: this.state.description,
            weburl: this.state.weburl
        };

        this.props.registerCompany(newUser, this.props.history);
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
                        <form onSubmit={this.onSubmit}>
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
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Save Company"
                                                className="btn btn-block btn-primary btn-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <div className="p-4 p-md-5 border rounded">
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
                                                name="companyName"
                                                placeholder=""
                                                onChange={this.onChange}
                                                value={this.state.companyName}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="company-name">
                                                User Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-name"
                                                name="userName"
                                                placeholder=""
                                                onChange={this.onChange}
                                                value={this.state.userName}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="company-name">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="company-name"
                                                name="email"
                                                placeholder=""
                                                onChange={this.onChange}
                                                value={this.state.email}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-name">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="company-name"
                                                name="pass"
                                                placeholder=""
                                                onChange={this.onChange}
                                                value={this.state.pass}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-name">
                                                Bussiness Stream
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="bussinessStream"
                                                name="bussinessStream"
                                                placeholder=""
                                                onChange={this.onChange}
                                                value={
                                                    this.state.bussinessStream
                                                }
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="job-description">
                                                Company Description
                                            </label>
                                            <input
                                                name="description"
                                                id=""
                                                cols="30"
                                                rows="10"
                                                class="form-control"
                                                onChange={this.onChange}
                                                value={this.state.description}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-website">
                                                Website
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-website"
                                                placeholder="https://"
                                                name="weburl"
                                                onChange={this.onChange}
                                                value={this.state.weburl}
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
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-4 ml-auto">
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Save Company"
                                                className="btn btn-block btn-primary btn-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    null,
    { registerCompany }
)(withRouter(RegisterCompany));
