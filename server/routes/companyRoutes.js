module.exports = (app, connection) => {
    app.post("api/company/register", (req, res) => {
        const bindvars = {
            UserName: req.body.UserName,
            Pass: req.body.Pass,
            CompanyName: req.body.CompanyName,
            Email: req.body.Email,
            BussinessStream: req.body.BussinessStream,
            Description: req.body.Description,
            WebsiteUrl: req.body.WebsiteUrl
        };

        connection.execute(
            "begin Project.insertCompany(:UserName,:Pass,:CompanyName,:Email,:BussinessStream,:Description,:WebsiteUrl); end;",
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

    app.post("api/company/login", (req, res) => {
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
                    const password = result.rows[0][2];

                    if (password != value.Pass) {
                        console.log("password not match");
                    } else {
                        const keys = "secret";

                        const payload = {
                            id: result.rows[0][0],
                            name: result.rows[0][3]
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
};
