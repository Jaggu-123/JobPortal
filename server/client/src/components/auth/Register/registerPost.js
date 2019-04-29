import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { registerPost } from "../../../actions/getJobs";
import { connect } from "react-redux";
import axios from "axios";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class RegisterPost extends Component {
    constructor() {
        super();
        this.state = {
            description: "",
            active: "",
            salary: "",
            skill: "",
            jobPost: "",
            jobType: "",
            streetAddress: "",
            city: "",
            State: "",
            country: "",
            zip: ""
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
            description: this.state.description,
            salary: this.state.salary,
            skill: this.state.skill,
            jobPost: this.state.jobPost,
            jobType: this.state.jobType,
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            state: this.state.State,
            country: this.state.country,
            zip: this.state.zip
        };

        if (this.state.active == "Yes") {
            newUser.active = 1;
        } else {
            newUser.active = 0;
        }

        newUser.companyid = this.props.auth.user.id;

        axios
            .post("/api/jobs/register", newUser)
            .then(res => this.props.history.push("/"))
            .catch(err => console.log(err));
        //this.props.registerPost(newUser, this.props.history);
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
                        <form onSubmit={this.onSubmit}>
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
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                value="Save User"
                                                className="btn btn-block btn-primary btn-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <div className="p-4 p-md-5 border rounded">
                                        <h3 className="text-black mb-5 border-bottom pb-2">
                                            Job Details
                                        </h3>

                                        <div className="form-group">
                                            <label for="email">
                                                Job Description
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                placeholder=""
                                                name="description"
                                                onChange={this.onChange}
                                                value={this.state.description}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="job-title">
                                                Active
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job-title"
                                                placeholder="Yes"
                                                name="active"
                                                onChange={this.onChange}
                                                value={this.state.active}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="job-location">
                                                Salary
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job-location"
                                                placeholder="500000"
                                                name="salary"
                                                onChange={this.onChange}
                                                value={this.state.salary}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label for="job-region">
                                                Skill
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job-region"
                                                placeholder="Web Developer"
                                                name="skill"
                                                onChange={this.onChange}
                                                value={this.state.skill}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label for="job-region">
                                                Job Post
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job-region"
                                                placeholder="Web Developer"
                                                name="jobPost"
                                                onChange={this.onChange}
                                                value={this.state.jobPost}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label for="job-type">
                                                Job Type
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job-region"
                                                placeholder="part-time or full-time"
                                                name="jobType"
                                                onChange={this.onChange}
                                                value={this.state.jobType}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-website">
                                                Street Address
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-website"
                                                placeholder=""
                                                name="streetAddress"
                                                value={this.state.streetAddress}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-website-fb">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-website-fb"
                                                name="city"
                                                value={this.state.city}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-website-tw">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-website-tw"
                                                name="State"
                                                value={this.state.State}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="company-website-tw">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-website-tw"
                                                name="country"
                                                value={this.state.country}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="company-website-tw">
                                                zip
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-website-tw"
                                                name="zip"
                                                value={this.state.zip}
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
                                                value="Save User"
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
    { registerPost }
)(withRouter(RegisterPost));
