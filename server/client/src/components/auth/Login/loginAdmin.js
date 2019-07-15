import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginAdmin } from "../../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("/images/xyz.jpg")`
};

class LoginAdmin extends Component {
    constructor() {
        super();
        this.state = {
            UserName: "",
            Pass: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            UserName: this.state.UserName,
            Pass: this.state.Pass
        };

        console.log(user);
        this.props.loginAdmin(user, this.props.history);
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
                                    Login
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Log In</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <h2 className="mb-4">Log In as Admin</h2>
                                <form
                                    onSubmit={this.onSubmit}
                                    className="p-4 border rounded"
                                >
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label
                                                className="text-black"
                                                htmlFor="fname"
                                            >
                                                UserName
                                            </label>
                                            <input
                                                type="text"
                                                id="fname"
                                                name="UserName"
                                                className="form-control"
                                                placeholder="UserName"
                                                onChange={this.onChange}
                                                value={this.state.UserName}
                                            />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label
                                                className="text-black"
                                                htmlFor="fname"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="fname"
                                                name="Pass"
                                                className="form-control"
                                                placeholder="Password"
                                                onChange={this.onChange}
                                                value={this.state.Pass}
                                            />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-6">
                                            <input
                                                type="submit"
                                                value="Log In"
                                                className="btn px-4 btn-primary text-white"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
    { loginAdmin }
)(withRouter(LoginAdmin));
