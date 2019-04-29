import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCompanyEvent } from "../actions/authActionsCompany";

const style = {
    backgroundImage: `url("/images/hero_1.jpg")`
};

class AllEvent extends Component {
    renderList() {
        if (this.props.events.event) {
            return this.props.events.event.map(job => {
                //console.log(job);
                return (
                    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <Link to={`/job/${job.id}`} />
                        <div class="job-listing-logo">
                            <img
                                src={`${this.props.events.company[8]}`}
                                alt="Free Website Template by Free-Template.co"
                                class="img-fluid"
                            />
                        </div>
                        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                <h2>{job.jobPostName}</h2>
                                <strong>{this.props.events.company[3]}</strong>
                            </div>
                            <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                {job.skill}
                            </div>
                            <div class="job-listing-meta">
                                {job.job_type == "part-time" ? (
                                    <span class="badge badge-danger">
                                        part-time
                                    </span>
                                ) : (
                                    <span class="badge badge-success">
                                        full-time
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
        //console.log(this.props.events);
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
                                    See All Jobs Posted By You
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

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
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events
});

export default connect(
    mapStateToProps,
    { getCompanyEvent }
)(AllEvent);
