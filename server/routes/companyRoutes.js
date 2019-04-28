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
