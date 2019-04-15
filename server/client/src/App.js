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
import RegisterPost from "./components/auth/Register/registerPost";
import RegisterCompany from "./components/auth/Register/registerCompany";
import RegisterUser from "./components/auth/Register/registerUser";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/registerPost"
                            component={RegisterPost}
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
