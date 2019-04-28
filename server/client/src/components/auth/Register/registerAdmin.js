import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerAdmin } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class RegisterAdmin extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            userName: "",
            email: "",
            pass: ""
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
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            pass: this.state.pass
        };

        this.props.registerAdmin(newUser, this.props.history);
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
                                    Register as Admin
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>
                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Register as Admin</strong>
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
                                            <h2>Register as Admin</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Save Admin"
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
                                            Admin Details
                                        </h3>
                                        <div class="form-group">
                                            <label for="company-name">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-name"
                                                name="fullName"
                                                placeholder=""
                                                onChange={this.onChange}
                                                value={this.state.fullName}
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
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-4 ml-auto">
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Save Admin"
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
    { registerAdmin }
)(withRouter(RegisterAdmin));
