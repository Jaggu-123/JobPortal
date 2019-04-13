const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (app, connection) => {
    console.log("connection");

    app.get("/", (req, res) => {
        res.send("Hello");
    });

    app.post("/api/users/register", (req, res) => {
        //console.log("request");
        //console.log(req);
        //console.log(req.body);
        const bindvars = {
            UserName: req.body.UserName,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Pass: req.body.Pass,
            Gender: req.body.Gender,
            ContactNo: parseInt(req.body.ContactNo),
            StreetAddress: req.body.StreetAddress,
            City: req.body.City,
            State: req.body.State,
            Country: req.body.Country,
            Zip: req.body.Zip
        };

        //res.send(bindvars);

        connection.execute(
            "begin Project.insertUser(:UserName,:FirstName,:LastName,:Email,:Pass,:Gender,:ContactNo,:StreetAddress,:City,:State,:Country,:Zip); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    error = err;
                    return;
                }
                console.log("kuvh");
                console.log(result);
                user = result.rowsAffected;
                error = null;

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
                    const password = result.rows[0][5];

                    if (password != value.Pass) {
                        console.log("password not match");
                    } else {
                        const keys = "secret";

                        const payload = {
                            id: result.rows[0][0],
                            name: result.rows[0][1]
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
