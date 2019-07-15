import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerExp } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("images/xyz.jpg")`
};

class RegisterExperience extends Component {
    constructor() {
        super();
        this.state = {
            companyName: "",
            position: "",
            description: ""
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
            user_account_id: this.props.auth.user.id,
            companyName: this.state.companyName,
            position: this.state.position,
            description: this.state.description
        };

        this.props.registerExp(newUser, this.props.history);
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
                                    Fill Experience
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>

                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Fill Experience</strong>
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
                                            <h2>Fill Experience</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Add Experience"
                                                className="btn btn-block btn-primary btn-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <div
                                        className="p-4 p-md-5 border rounded"
                                        method="post"
                                    >
                                        <h3 class="text-black my-5 border-bottom pb-2">
                                            Experience Details
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
                                                value={this.state.name}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                Position
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-tagline"
                                                name="position"
                                                placeholder=""
                                                value={this.state.name}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-name">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-name"
                                                name="description"
                                                placeholder=""
                                                value={this.state.name}
                                                onChange={this.onChange}
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
                                                value="Add Experience"
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

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { registerExp }
)(withRouter(RegisterExperience));
