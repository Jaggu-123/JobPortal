import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const style = {
    backgroundImage: `url("/images/hero_1.jpg")`
};

class ApplyJob extends Component {
    renderList() {
        console.log(this.props.allapply);
        if (this.props.allapply) {
            return this.props.allapply.map(user => {
                return (
                    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <Link to={`/user/${user.id}`} />
                        <div class="job-listing-logo">
                            <img
                                src={`${user.photo}`}
                                alt="Free Website Template by Free-Template.co"
                                class="img-fluid"
                            />
                        </div>

                        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                                <h2>{user.firstName}</h2>
                                <strong>{user.lastName}</strong>
                            </div>
                            <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                {user.email}
                            </div>
                            <div class="job-listing-meta">
                                {user.gender == "Male" ? (
                                    <span class="badge badge-danger">Male</span>
                                ) : (
                                    <span class="badge badge-success">
                                        Female
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
        console.log(this.props.allapply);
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
                                    Manager
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allapply: state.allapply
});

export default connect(
    mapStateToProps,
    null
)(ApplyJob);
