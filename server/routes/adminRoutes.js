const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (app, connection) => {
    app.post("/api/admin/register", (req, res) => {
        const bindvars = {
            FullName: req.body.fullName,
            UserName: req.body.userName,
            Email: req.body.email,
            Pass: req.body.pass
        };

        console.log(bindvars);

        connection.execute(
            "insert into own(id,userName,fullName,email,pass) values (seqAdmin.nextval,:UserName,:FullName,:Email,:Pass)",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result.rowsAffected);
                }
            }
        );
    });

    app.post("/api/admin/login", (req, res) => {
        const value = {
            UserName: req.body.UserName,
            Pass: req.body.Pass
        };

        const bindvars = {
            UserName: req.body.UserName
        };

        connection.execute(
            "select * from own where userName = :UserName",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log("username not matched");
                    console.log(err);
                } else {
                    console.log(result);
                    const password = result.rows[0][4];

                    if (password != value.Pass) {
                        console.log("password not match");
                    } else {
                        const keys = "secret";

                        const payload = {
                            id: result.rows[0][0],
                            name: result.rows[0][2],
                            type: 3
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

    app.get(
        "/api/admin/current",
        passport.authenticate("jwt", { session: false }),
        (req, res) => {
            //res.json({ msg: "Success" });
            // res.json(req.user);
            res.json({
                id: req.admin.id,
                name: req.admin.fullName,
                email: req.admin.email
            });
        }
    );
};
