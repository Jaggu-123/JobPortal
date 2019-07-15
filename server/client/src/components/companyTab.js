import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllJobs } from "../actions/getJobs";
import { getCompanyEvent } from "../actions/authActionsCompany";

class CompanyTab extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.auth.user.type === 2) {
            this.props.getCompanyEvent({ id: this.props.auth.user.id });
        } else {
            this.props.getAllJobs();
        }
    }
    renderList() {
        // console.log(this.props.jobs);
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
            <section class="site-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center">
                        <div class="col-md-7 text-center">
                            <h2 class="section-title mb-2">Job Listed Are:</h2>
                        </div>
                    </div>

                    <ul class="job-listings mb-5">{this.renderList()}</ul>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.alljobs,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getAllJobs, getCompanyEvent }
)(CompanyTab);
