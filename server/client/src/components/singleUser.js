import React, { Component } from "react";
import { searchJobID, applyJob } from "../actions/getJobs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("/images/hero_1.jpg")`
};

const style1 = {
    width: 100
};

class SingleUser extends Component {
    constructor() {
        super();
        this.onhandle = this.onhandle.bind(this);
    }
    componentDidMount() {
        const bindval = {
            id: this.props.match.params.jobid
        };
        this.props.searchJobID(bindval);
    }
    onhandle(e) {
        const bind = {
            id: this.props.job.id
            // user_account_id: this.props.auth.id
        };
        console.log(bind);
    }
    render() {
        const job = this.props.job;

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
                                    {job.job_post}
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="/searchpage">Job</Link>
                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>{job.job_post}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d-flex align-items-center">
                                    <div className="border p-2 d-inline-block mr-3 rounded">
                                        <img
                                            src={`${job.logo}`}
                                            style={style1}
                                            alt="Free Website Template By Free-Template.co"
                                        />
                                    </div>
                                    <div>
                                        <h2>{job.job_post}</h2>
                                        <div>
                                            <span className="ml-0 mr-2 mb-2">
                                                <span className="icon-briefcase mr-2" />
                                                {job.companyName}
                                            </span>
                                            <span className="m-2">
                                                <span className="icon-room mr-2" />
                                                {job.city}
                                            </span>
                                            <span className="m-2">
                                                <span className="icon-clock-o mr-2" />
                                                <span className="text-primary">
                                                    {job.job_type}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-light btn-md"
                                        >
                                            <span className="icon-heart-o mr-2 text-danger" />
                                            Save Job
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            onClick={() => this.onhandle()}
                                            className="btn btn-block btn-primary btn-md"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    {/* <figure className="mb-5">
                                        <img
                                            src="images/job_single_img_1.jpg"
                                            alt="Free Website Template by Free-Template.co"
                                            className="img-fluid rounded"
                                        />
                                    </figure> */}
                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Job Description
                                    </h3>
                                    <p>{job.jobDescription}</p>

                                    <h3 className="h5 d-flex align-items-center mb-4 text-primary">
                                        <span className="icon-align-left mr-3" />
                                        Company Description
                                    </h3>
                                    <p>{job.description}</p>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-light btn-md"
                                        >
                                            <span className="icon-heart-o mr-2 text-danger" />
                                            Save Job
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <button
                                            onClick={() => this.onhandle()}
                                            className="btn btn-block btn-primary btn-md"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-light p-3 border rounded mb-4">
                                    <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                                        Job Summary
                                    </h3>
                                    <ul className="list-unstyled pl-3 mb-0">
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Email:
                                            </strong>{" "}
                                            {job.email}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                IsActive
                                            </strong>{" "}
                                            {job.isActive}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Employment Status:
                                            </strong>{" "}
                                            {job.job_type}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Experience:
                                            </strong>{" "}
                                            2 to 3 year(s)
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Job City:
                                            </strong>{" "}
                                            {job.city}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Salary:
                                            </strong>{" "}
                                            {job.salary}
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Gender:
                                            </strong>{" "}
                                            Any
                                        </li>
                                        <li className="mb-2">
                                            <strong className="text-black">
                                                Bussiness Stream
                                            </strong>{" "}
                                            {job.bussinessStream}
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-light p-3 border rounded">
                                    <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">
                                        Share
                                    </h3>
                                    <div className="px-3">
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-facebook" />
                                        </a>
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-twitter" />
                                        </a>
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-linkedin" />
                                        </a>
                                        <a
                                            href="#"
                                            className="pt-3 pb-3 pr-3 pl-0"
                                        >
                                            <span className="icon-pinterest" />
                                        </a>
                                    </div>
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
    job: state.job,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { searchJobID, applyJob }
)(SingleUser);
