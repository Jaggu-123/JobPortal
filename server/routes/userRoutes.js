const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (app, connection, upload, cloudinary) => {
    console.log("connection");

    app.get("/", (req, res) => {
        res.send("Hello");
    });

    app.post("/api/users/education", (req, res) => {
        const bindvars = {
            User_account_id: req.body.user_account_id,
            DegreeName: req.body.degreeName,
            InstituteName: req.body.instituteName,
            Cgpa: req.body.cgpa
        };

        console.log(bindvars);

        connection.execute(
            "begin Project.insertEducation(:User_account_id,:DegreeName,:InstituteName,:Cgpa); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log(result.rowsAffected);
                }
            }
        );
    });

    app.post("/api/users/experience", (req, res) => {
        const bindvars = {
            User_account_id: req.body.user_account_id,
            CompanyName: req.body.companyName,
            Position: req.body.position,
            Description: req.body.description
        };

        connection.execute(
            "begin Project.insertExperience(:User_account_id,:CompanyName,:Position,:Description); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log(result.rowsAffected);
                }
            }
        );
    });

    app.post(
        "/api/users/upload",
        upload.single("myImage"),
        async (req, res) => {
            console.log(req.file.path);
            cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
                if (err) {
                    console.log("error");
                    console.log(err);
                } else {
                    console.log(result);
                    res.send(result);
                }
            });
        }
    );

    app.post(
        "/api/users/uploadDoc",
        upload.single("myDocs"),
        async (req, res) => {
            console.log(req.file.path);
            cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
                if (err) {
                    console.log("error");
                    console.log(err);
                } else {
                    console.log(result);
                    res.send(result);
                }
            });
        }
    );

    app.post("/api/users/register", (req, res) => {
        const bindvars = {
            UserName: req.body.userName,
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Email: req.body.email,
            Pass: req.body.pass,
            Gender: req.body.gender,
            ContactNo: parseInt(req.body.contactNo),
            StreetAddress: req.body.streetAddress,
            City: req.body.city,
            State: req.body.state,
            Country: req.body.country,
            Zip: req.body.zip,
            Photo: req.body.url,
            Resumee: req.body.resume
        };

        console.log(bindvars);

        connection.execute(
            "begin Project.insertUser(:UserName,:FirstName,:LastName,:Email,:Pass,:Gender,:ContactNo,:StreetAddress,:City,:State,:Country,:Zip,:Photo,:Resumee); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("kuvh");
                console.log(result);
                user = result.rowsAffected;

                res.json(result.rowsAffected);

                // connection.close(function(err) {
                //     if (err) {
                //         console.log(err);
                //     }
                //     console.log("close");
                // });
            }
        );
    });

    app.post("/api/users/login", (req, res) => {
        console.log("request");
        const value = {
            UserName: req.body.UserName,
            Pass: req.body.Pass
        };

        const bindvars = {
            UserName: req.body.UserName
        };

        connection.execute(
            "select * from user_account where userName = :UserName",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log("username not matched");
                    console.log(err);
                } else {
                    console.log(result.rows);
                    const password = result.rows[0][5];

                    if (password != value.Pass) {
                        console.log("password not match");
                    } else {
                        const keys = "secret";

                        const payload = {
                            id: result.rows[0][0],
                            name: result.rows[0][1],
                            type: 1
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

    app.post(
        "/api/users/education",
        passport.authenticate("jwt", { session: false }),
        (req, res) => {
            const bindvars = {
                User_account_id: parseInt(req.user.id),
                DegreeName: req.body.DegreeName,
                InstituteName: req.body.InstituteName,
                Cgpa: req.body.Cgpa
            };

            connection.execute(
                "begin Project.insertEducation(:User_account_id,:DegreeName,:InstituteName,:Cgpa); end;",
                bindvars,
                function(err, result) {
                    if (err) {
                        console.log("error");
                        console.log(err);
                    } else {
                        res.send(result[0]);
                    }
                }
            );
        }
    );

    app.post(
        "/api/users/experience",
        passport.authenticate("jwt", { session: false }),
        (req, res) => {
            const bindvars = {
                User_account_id: parseInt(req.user.id),
                CompanyName: req.body.CompanyName,
                Position: req.body.Position,
                Description: req.body.Description
            };

            connection.execute(
                "begin Project.insertExperience(:User_account_id,:CompanyName,:Position,:Description); end;",
                bindvars,
                function(err, result) {
                    if (err) {
                        console.log("error");
                        console.log(err);
                    } else {
                        res.send(result[0]);
                    }
                }
            );
        }
    );

    app.get(
        "/api/users/current",
        passport.authenticate("jwt", { session: false }),
        (req, res) => {
            //res.json({ msg: "Success" });
            // res.json(req.user);
            res.json({
                id: req.user.id,
                name: req.user.firstName,
                email: req.user.email
            });
        }
    );
};
