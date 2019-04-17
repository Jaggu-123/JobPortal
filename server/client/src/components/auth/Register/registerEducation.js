import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
    backgroundImage: `url("images/landing.jpg")`
};

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
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
                                    Register User
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>

                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Register User</strong>
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
                                    <div>
                                        <h2>Register User</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-primary btn-md"
                                        >
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <form
                                    className="p-4 p-md-5 border rounded"
                                    method="post"
                                >
                                    <h3 class="text-black my-5 border-bottom pb-2">
                                        User Details
                                    </h3>

                                    <div class="form-group">
                                        <label for="company-name">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            name="firstName"
                                            placeholder="e.g. John"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-tagline">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-tagline"
                                            placeholder="e.g. Sturgis"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">Gender</label>
                                        <br />
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            class="form-control"
                                            id="company-name"
                                            placeholder="e.g. JohnSturgis0012"
                                        />
                                        <label>Male</label>
                                        <br />
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            class="form-control"
                                            id="company-name"
                                            placeholder="e.g. JohnSturgis0012"
                                        />
                                        <label>Female</label>
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Email Id
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Create a Username
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder="e.g. JohnSturgis0012"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-name">
                                            Create your password
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Re-enter your password
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <h3>Address</h3>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Door no.
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Street, Area
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="company-name">City</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">State</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="company-name">
                                            Pin Code
                                        </label>
                                        <input
                                            type="tel"
                                            pattern="[0-9]{4}"
                                            class="form-control"
                                            id="company-name"
                                            placeholder=""
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4 ml-auto">
                                <div className="row">
                                    <div className="col-6">
                                        <a
                                            href="#"
                                            className="btn btn-block btn-primary btn-md"
                                        >
                                            Sign Up
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

export default Register;
