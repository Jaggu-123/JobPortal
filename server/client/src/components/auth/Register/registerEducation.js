import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerEdu } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("images/xyz.jpg")`
};

class RegisterEducation extends Component {
    constructor() {
        super();
        this.state = {
            degreeName: "",
            instituteName: "",
            cgpa: ""
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
            degreeName: this.state.degreeName,
            instituteName: this.state.instituteName,
            cgpa: this.state.cgpa
        };
        this.props.registerEdu(newUser, this.props.history);
    }

    render() {
        console.log(this.props);
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
                                    Fill Education
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>

                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Fill Education</strong>
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
                                            <h2>Fill Education</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Add Education"
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
                                            Educational Details
                                        </h3>

                                        <div class="form-group">
                                            <label for="company-name">
                                                Degree Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-name"
                                                name="degreeName"
                                                placeholder=""
                                                value={this.state.name}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                Institute Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-tagline"
                                                name="instituteName"
                                                placeholder=""
                                                value={this.state.name}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-name">
                                                CGPA
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-name"
                                                name="cgpa"
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
                                                value="Add Education"
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
    { registerEdu }
)(withRouter(RegisterEducation));
