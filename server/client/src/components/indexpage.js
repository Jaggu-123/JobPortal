import React, { Component, Fragment } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchJob } from "../actions/getJobs";

const style = {
    padding: 5,
    borderRadius: 5
};

const stylebg = {
    backgroundImage: `url("images/xyz.jpg")`
};

const options = [
    { value: "alljobs", label: "All Jobs" },
    { value: "salary", label: "Salary" },
    { value: "active", label: "Active Jobs" },
    { value: "jobtype", label: "Job Type" },
    { value: "company", label: "Company" }
];

class IndexPage extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            label: "",
            options: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onhandleChange = this.onhandleChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onhandleChange(selectoption) {
        this.setState({ value: selectoption.value });
        this.setState({ label: selectoption.label });
    }

    onSubmit(e) {
        e.preventDefault();

        const searchUser = {
            value: this.state.value,
            label: this.state.label,
            options: this.state.options
        };

        this.props.searchJob(searchUser);
    }

    showList() {
        if (this.props.jobs.length != 0) {
            return (
                <section class="site-section">
                    <div class="container">
                        <ul class="job-listings mb-5">{this.renderList()}</ul>
                    </div>
                </section>
            );
        }
    }

    renderList() {
        if (this.props.jobs) {
            return this.props.jobs.map(job => {
                return (
                    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <Link to={`/job/${job.id}`} />
                        <div class="job-listing-logo">
                            <img
                                src={`${job.logo}`}
                                alt="Free Website Template by Free-Template.co"
                                class="img-fluid"
                            />
                        </div>

                        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                <h2>{job.companyName}</h2>
                                <strong>{job.job_post}</strong>
                            </div>
                            <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                {job.skill}
                            </div>
                            <div class="job-listing-meta">
                                {job.job_type == "part-time" ? (
                                    <span class="badge badge-danger">
                                        Part Time
                                    </span>
                                ) : (
                                    <span class="badge badge-success">
                                        Full Time
                                    </span>
                                )}
                            </div>
                        </div>
                    </li>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <div id="overlayer" />
                <section
                    class="home-section section-hero overlay bg-image"
                    style={stylebg}
                    id="home-section"
                >
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-12">
                                <div class="mb-5 text-center">
                                    <h1 class="text-white font-weight-bold">
                                        Search Your Dream Job Here
                                    </h1>
                                </div>
                                <form
                                    onSubmit={this.onSubmit}
                                    class="search-jobs-form"
                                >
                                    <div class="row mb-5 justify-content-center">
                                        <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                            <Fragment>
                                                <Select
                                                    class="selectpicker"
                                                    classNamePrefix="select"
                                                    data-style="btn-white btn-lg"
                                                    data-width="100%"
                                                    data-live-search="true"
                                                    title="Search By"
                                                    defaultValue={options[0]}
                                                    value={
                                                        this.state.selectoption
                                                    }
                                                    onChange={
                                                        this.onhandleChange
                                                    }
                                                    options={options}
                                                />
                                            </Fragment>
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                            <input
                                                style={style}
                                                name="options"
                                                onChange={this.onChange}
                                                value={this.state.options}
                                            />
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                            <input
                                                type="submit"
                                                value="Search Job"
                                                class="btn btn-primary btn-lg btn-block text-white btn-search"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {this.showList()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs
});

export default connect(
    mapStateToProps,
    { searchJob }
)(IndexPage);
