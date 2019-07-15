import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import { withRouter } from "react-router-dom";

const style = {
    backgroundImage: `url("images/xyz.jpg")`
};

class RegisterUser extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            pass: "",
            gender: "",
            contactNo: "",
            streetAddress: "",
            city: "",
            State: "",
            country: "",
            zip: "",
            file: null,
            resume: null
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeFiles = this.onChangeFiles.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeFile(e) {
        this.setState({ file: e.target.files[0] });
    }
    onChangeFiles(e) {
        this.setState({ resume: e.target.files[0] });
    }

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("myImage", this.state.file);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };

        const formData1 = new FormData();
        formData1.append("myDocs", this.state.resume);
        // const config = {
        //     headers: {
        //         "content-type": "multipart/form-data"
        //     }
        // };

        const newUser = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pass: this.state.pass,
            gender: this.state.gender,
            contactNo: this.state.contactNo,
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            state: this.state.State,
            country: this.state.country,
            zip: this.state.zip
        };

        this.props.registerUser(
            newUser,
            formData,
            formData1,
            config,
            this.props.history
        );
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
                                    Register as User
                                </h1>
                                <div className="custom-breadcrumbs">
                                    <Link to="/">Home</Link>
                                    <span className="mx-2 slash">/</span>
                                    <Link to="job">Job</Link>
                                    <span className="mx-2 slash">/</span>
                                    <span className="text-white">
                                        <strong>Register as user</strong>
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
                                            <h2>Register as User</h2>
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
                                    <div
                                        className="p-4 p-md-5 border rounded"
                                        onSubmit={this.onSubmit}
                                    >
                                        <h3 class="text-black my-5 border-bottom pb-2">
                                            User Details
                                        </h3>
                                        <div class="form-group">
                                            <label for="company-name">
                                                User Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-name"
                                                name="userName"
                                                placeholder=""
                                                value={this.state.userName}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-tagline"
                                                placeholder=""
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.onChange}
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
                                                placeholder=""
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-tagline"
                                                placeholder=""
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="company-tagline"
                                                placeholder=""
                                                name="pass"
                                                value={this.state.pass}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                Gender
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-tagline"
                                                placeholder=""
                                                name="gender"
                                                value={this.state.gender}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <label for="company-tagline">
                                                Contact Number
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="company-tagline"
                                                placeholder=""
                                                name="contactNo"
                                                value={this.state.contactNo}
                                                onChange={this.onChange}
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

                                        <div class="form-group">
                                            <label for="company-website-tw d-block">
                                                Upload Image
                                            </label>
                                            <br />
                                            <label class="btn btn-primary btn-md btn-file">
                                                Browse File
                                                <input
                                                    type="file"
                                                    name="myImage"
                                                    onChange={this.onChangeFile}
                                                />
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label for="company-website-tw d-block">
                                                Upload Resume
                                            </label>
                                            <br />
                                            <label class="btn btn-primary btn-md btn-file">
                                                Browse File
                                                <input
                                                    type="file"
                                                    name="myDocs"
                                                    onChange={
                                                        this.onChangeFiles
                                                    }
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-5">
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
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    null,
    { registerUser }
)(withRouter(RegisterUser));
