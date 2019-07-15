import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, setCurrentUser } from "../../actions/authActions";
import { getCompanyEvent } from "../../actions/authActionsCompany";
import { withRouter } from "react-router-dom";

const style = {
    margin: 5
};

class Navbar extends Component {
    componentDidMount() {
        this.props.setCurrentUser();
    }
    onLogout(e) {
        this.props.logoutUser();
    }
    renderLogin() {
        if (this.props.auth.isAuthenticated == true) {
            if (this.props.auth.user.type == 1) {
                return (
                    <div className="ml-auto">
                        <Link
                            style={style}
                            to={`/user/${this.props.auth.user.id}`}
                            className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                        >
                            Profile
                        </Link>
                        <Link
                            style={style}
                            to="/"
                            onClick={this.onLogout.bind(this)}
                            className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                        >
                            <span className="mr-2 icon-lock_outline" />
                            LogOut
                        </Link>
                    </div>
                );
            } else if (this.props.auth.user.type == 2) {
                return (
                    <div className="ml-auto">
                        <Link
                            style={style}
                            to="/registerPost"
                            className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                        >
                            <span className="mr-2 icon-add" />
                            Post a Job
                        </Link>
                        <Link
                            style={style}
                            to="/"
                            onClick={this.onLogout.bind(this)}
                            className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                        >
                            <span className="mr-2 icon-lock_outline" />
                            LogOut
                        </Link>
                    </div>
                );
            } else {
                return (
                    <div className="ml-auto">
                        <Link
                            style={style}
                            to="/registerAdmin"
                            className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                        >
                            <span className="mr-2 icon-add" />
                            Make A Admin
                        </Link>
                        <Link
                            style={style}
                            to="/"
                            onClick={this.onLogout.bind(this)}
                            className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                        >
                            <span className="mr-2 icon-lock_outline" />
                            LogOut
                        </Link>
                    </div>
                );
            }
        } else if (this.props.auth.isAuthenticated == false) {
            return (
                <div className="ml-auto">
                    <Link
                        style={style}
                        to="/login"
                        className="btn btn-primary border-width-2 d-none d-lg-inline-block"
                    >
                        <span className="mr-2 icon-lock_outline" />
                        Log In
                    </Link>
                    <Link
                        style={style}
                        to="/login/admin"
                        className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                    >
                        Admin
                    </Link>
                </div>
            );
        }
    }
    renderUser() {
        if (this.props.auth.isAuthenticated && this.props.auth.user.type == 1) {
            return (
                <div>
                    <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                        <li>
                            <Link to="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/searchpage" className="nav-link">
                                Job Search
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        } else if (
            this.props.auth.isAuthenticated &&
            this.props.auth.user.type == 2
        ) {
            return (
                <div>
                    <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                        <li>
                            <Link to="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/allpostjobs">
                                <span
                                    onClick={() =>
                                        this.props.getCompanyEvent({
                                            id: this.props.auth.user.id
                                        })
                                    }
                                    className="nav-link"
                                >
                                    All Events
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        } else if (
            this.props.auth.isAuthenticated &&
            this.props.auth.user.type == 3
        ) {
            return (
                <div>
                    <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                        <li>
                            <Link to="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/searchpage" className="nav-link">
                                Job Search
                            </Link>
                        </li>
                        <li>
                            <Link to="/allpostjobs">
                                <span
                                    onClick={() =>
                                        this.props.getCompanyEvent(
                                            {
                                                id: this.props.auth.user.id
                                            },
                                            this.props.history
                                        )
                                    }
                                    className="nav-link"
                                >
                                    All Events
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }
    render() {
        return (
            <header className="site-navbar mt-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="site-logo col-6">
                            <Link to="/">JobAdda</Link>
                        </div>

                        <nav className="mx-auto site-navigation">
                            {this.renderUser()}
                        </nav>

                        <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                            {this.renderLogin()}
                            <a
                                href="#"
                                className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
                            >
                                <span className="icon-menu h3 m-0 p-0 mt-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser, setCurrentUser, getCompanyEvent }
)(withRouter(Navbar));
