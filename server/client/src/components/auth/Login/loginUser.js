import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

class loginUser extends Component {
    constructor() {
        super();
        this.state = {
            UserName: "",
            Pass: "",
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

        const user = {
            UserName: this.state.UserName,
            Pass: this.state.Pass
        };

        console.log(user);
    }

    render() {
        return (
            <div className="col-lg-6">
                <h2 className="mb-4">Log In as Employee</h2>
                <form onSubmit={this.onSubmit} className="p-4 border rounded">
                    <div className="row form-group">
                        <div className="col-md-12 mb-3 mb-md-0">
                            <label className="text-black" for="fname">
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
                    <div className="row form-group mb-4">
                        <div className="col-md-12 mb-3 mb-md-0">
                            <label className="text-black" for="fname">
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
                        <div className="col-md-6">
                            <Link
                                to="/registerUser"
                                className="btn px-4 btn-primary text-white"
                            >
                                RegisterAsEmployee
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default loginUser;
