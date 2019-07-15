const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (app, connection) => {
    app.post("/api/company/register", (req, res) => {
        //console.log("eror");
        //console.log(req.body);
        const bindvars = {
            UserName: req.body.userName,
            Pass: req.body.pass,
            CompanyName: req.body.companyName,
            Email: req.body.email,
            BussinessStream: req.body.bussinessStream,
            Description: req.body.description,
            WebsiteUrl: req.body.weburl,
            Logo: req.body.logo
        };

        connection.execute(
            "begin Project.insertCompany(:UserName,:Pass,:CompanyName,:Email,:BussinessStream,:Description,:WebsiteUrl,:Logo); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log("error");
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );
    });

    app.post("/api/company/login", (req, res) => {
        const value = {
            UserName: req.body.UserName,
            Pass: req.body.Pass
        };

        const bindvars = {
            UserName: req.body.UserName
        };

        connection.execute(
            "select * from company_account where userName = :UserName",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log("username not matched");
                    console.log(err);
                } else {
                    console.log(result);
                    const password = result.rows[0][2];

                    if (password != value.Pass) {
                        console.log("password not match");
                    } else {
                        const keys = "secret";

                        const payload = {
                            id: result.rows[0][0],
                            name: result.rows[0][3],
                            type: 2
                        };

                        jwt.sign(
                            payload,
                            keys,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    }
                }
            }
        );
    });

    app.get("/api/company/getjob", (req, res) => {
        const bind = {
            id: req.query.id
        };

        // console.log(bind);

        const data = {
            company: null,
            event: null
        };
        connection.execute(
            "select * from company_account where id = :id",
            bind,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    data.company = result.rows[0];
                    connection.execute(
                        "select * from job_event where company_id = :id",
                        bind,
                        function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                var array = [];
                                result.rows.map(arr => {
                                    // var component = {
                                    //     id: result.rows[i][0],
                                    //     company_id: result.rows[i][1],
                                    //     job_post_id: result.rows[i][2],
                                    //     isActive: result.rows[i][3],
                                    //     jobDescription: result.rows[i][4],
                                    //     salary: result.rows[i][5],
                                    //     skill: result.rows[i][6],
                                    //     job_type: result.rows[i][7]
                                    // };
                                    //console.log(component);
                                    var bindvars = {
                                        id: arr[2]
                                    };
                                    console.log(bindvars);
                                    setTimeout(() => {
                                        connection.execute(
                                            "select * from job_post where id = :id",
                                            bindvars,
                                            function(err, results) {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    //console.log(arr);
                                                    var component = {
                                                        id: arr[0],
                                                        company_id: arr[1],
                                                        job_post_id: arr[2],
                                                        isActive: arr[3],
                                                        jobDescription: arr[4],
                                                        salary: arr[5],
                                                        skill: arr[6],
                                                        job_type: arr[7]
                                                    };
                                                    component.jobPostName =
                                                        results.rows[0][1];
                                                    array.push(component);
                                                    // console.log(component);
                                                    // console.log(
                                                    //     results.rows[0][1]
                                                    // );
                                                    console.log(component);
                                                }
                                            }
                                        );
                                    }, 1000);
                                });

                                setTimeout(() => {
                                    data.event = array;
                                    console.log(data);
                                    res.send(data);
                                }, 3000);
                            }
                        }
                    );
                }
            }
        );
    });

    app.get("/api/company/getjobName", (req, res) => {
        const bind = {
            id: req.query.options
        };
        console.log(bind);
        const data = {
            company: null,
            event: null
        };
        connection.execute(
            "select * from company_account where companyName = :id",
            bind,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    data.company = result.rows[0];
                    console.log(data.company);
                    const bindvars = {
                        id: result.rows[0][0]
                    };
                    console.log(bindvars);
                    connection.execute(
                        "select * from job_event where company_id = :id",
                        bindvars,
                        function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                var array = [];

                                result.rows.map(arr => {
                                    // var component = {
                                    //     id: result.rows[i][0],
                                    //     company_id: result.rows[i][1],
                                    //     job_post_id: result.rows[i][2],
                                    //     isActive: result.rows[i][3],
                                    //     jobDescription: result.rows[i][4],
                                    //     salary: result.rows[i][5],
                                    //     skill: result.rows[i][6],
                                    //     job_type: result.rows[i][7]
                                    // };
                                    //console.log(component);
                                    var bindvars = {
                                        id: arr[2]
                                    };
                                    console.log(bindvars);
                                    setTimeout(() => {
                                        connection.execute(
                                            "select * from job_post where id = :id",
                                            bindvars,
                                            function(err, results) {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    //console.log(arr);
                                                    var component = {
                                                        id: arr[0],
                                                        company_id: arr[1],
                                                        job_post_id: arr[2],
                                                        isActive: arr[3],
                                                        jobDescription: arr[4],
                                                        salary: arr[5],
                                                        skill: arr[6],
                                                        job_type: arr[7]
                                                    };
                                                    component.jobPostName =
                                                        results.rows[0][1];
                                                    array.push(component);
                                                    // console.log(component);
                                                    // console.log(
                                                    //     results.rows[0][1]
                                                    // );
                                                    console.log(component);
                                                }
                                            }
                                        );
                                    }, 1000);
                                });

                                setTimeout(() => {
                                    data.event = array;
                                    console.log(array);
                                    res.send(array);
                                }, 10000);
                            }
                        }
                    );
                }
            }
        );
    });

    app.get(
        "/api/company/current",
        passport.authenticate("jwt", { session: false }),
        (req, res) => {
            //res.json({ msg: "Success" });
            // res.json(req.user);
            res.json({
                id: req.company.id,
                name: req.company.companyName,
                email: req.company.email
            });
        }
    );
};
