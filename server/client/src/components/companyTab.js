import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllJobs } from "../actions/getJobs";

class CompanyTab extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllJobs();
    }
    renderList() {
        if (this.props.jobs) {
            return this.props.jobs.map(job => {
                return (
                    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <a href="job-single.html" />
                        <div class="job-listing-logo">
                            <img
                                src="images/job_logo_1.jpg"
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
            <section class="site-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center">
                        <div class="col-md-7 text-center">
                            <h2 class="section-title mb-2">
                                43,167 Job Listed
                            </h2>
                        </div>
                    </div>

                    <ul class="job-listings mb-5">{this.renderList()}</ul>

                    <div class="row pagination-wrap">
                        <div class="col-md-6 text-center text-md-left mb-4 mb-md-0">
                            <span>Showing 1-7 Of 43,167 Jobs</span>
                        </div>
                        <div class="col-md-6 text-center text-md-right">
                            <div class="custom-pagination ml-auto">
                                <a href="#" class="prev">
                                    Prev
                                </a>
                                <div class="d-inline-block">
                                    <a href="#" class="active">
                                        1
                                    </a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                </div>
                                <a href="#" class="next">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs
});

export default connect(
    mapStateToProps,
    { getAllJobs }
)(CompanyTab);
