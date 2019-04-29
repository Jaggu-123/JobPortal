import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

//Import files
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login/login";
import LoginAdmin from "./components/auth/Login/loginAdmin";
import RegisterPost from "./components/auth/Register/registerPost";
import RegisterCompany from "./components/auth/Register/registerCompany";
import RegisterUser from "./components/auth/Register/registerUser";
import RegisterEdu from "./components/auth/Register/registerEducation";
import RegisterExp from "./components/auth/Register/registerExp";
import RegisterAdmin from "./components/auth/Register/registerAdmin";
import SingleJob from "./components/singleJob";
import SingleUser from "./components/singleUser";
import Jobs from "./components/companyTab";
import IndexPage from "./components/indexpage";
import Applyjob from "./components/applyJob";
import AllEvent from "./components/allEvent";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/job/:jobid" component={SingleJob} />
                        <Route
                            exact
                            path="/user/:userid"
                            component={SingleUser}
                        />
                        <Route exact path="/allpostjobs" component={AllEvent} />
                        <Route exact path="/" component={Jobs} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/allapplyUser"
                            component={Applyjob}
                        />
                        <Route
                            exact
                            path="/login/admin"
                            component={LoginAdmin}
                        />
                        <Route exact path="/searchpage" component={IndexPage} />
                        <Route
                            exact
                            path="/registerPost"
                            component={RegisterPost}
                        />
                        <Route
                            exact
                            path="/registerAdmin"
                            component={RegisterAdmin}
                        />
                        <Route
                            exact
                            path="/registerExperience"
                            component={RegisterExp}
                        />
                        <Route
                            exact
                            path="/registerEducation"
                            component={RegisterEdu}
                        />
                        <Route
                            exact
                            path="/registerCompany"
                            component={RegisterCompany}
                        />
                        <Route
                            exact
                            path="/registerUser"
                            component={RegisterUser}
                        />
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
