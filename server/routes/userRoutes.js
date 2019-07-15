const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports = (app, connection, upload, cloudinary) => {
    console.log("connection");

    app.get("/", (req, res) => {
        res.send("Hello");
    });

    var ID = null;

    app.get("/api/user/detail", (req, res) => {
        const bindvars = {
            id: req.query.id
        };
        connection.execute(
            "select * from user_account where id = :id",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    var row1 = result.rows[0];
                    var array = [];
                    // var component = {
                    //     userName:row[1],
                    //     firstName:row[2],
                    //     lastName:row[3],
                    //     email :row[4],
                    //     pass :row[5],
                    //     gender :row[6],
                    //     contactNo :row[7],
                    //     addressID:row[8]

                    // };
                    // array.push(component);
                    var bindcompany = {
                        id: row1[10]
                    };

                    connection.execute(
                        "select * from addresses where id = :id",
                        bindcompany,
                        function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                var row2 = result.rows[0];
                                row1.push(row2[1]);
                                row1.push(row2[2]);
                                row1.push(row2[3]);
                                row1.push(row2[4]);
                                row1.push(row2[5]);

                                var bindedu = {
                                    id: row1[0]
                                };

                                connection.execute(
                                    "select * from educational_detail where user_account_id = :id",
                                    bindedu,
                                    function(err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            var row3 = result.rows[0];
                                            row1.push(row3[0]);
                                            row1.push(row3[2]);
                                            row1.push(row3[3]);
                                            row1.push(row3[4]);
                                        }
                                        var bindexp = {
                                            id: row1[0]
                                        };

                                        connection.execute(
                                            "select * from experience_detail where user_account_id = :id",
                                            bindexp,
                                            function(err, result) {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    var row4 = result.rows[0];
                                                    row1.push(row4[0]);
                                                    row1.push(row4[2]);
                                                    row1.push(row4[3]);
                                                    row1.push(row4[4]);
                                                }
                                                var component = {
                                                    id: row1[0],
                                                    userName: row1[1],
                                                    firstName: row1[2],
                                                    lastName: row1[3],
                                                    email: row1[4],
                                                    pass: row1[5],
                                                    photo: row1[6],
                                                    resume: row1[7],
                                                    gender: row1[8],
                                                    contactNo: row1[9],
                                                    streetAddress: row1[11],
                                                    city: row1[12],
                                                    state: row1[13],
                                                    country: row1[14],
                                                    zip: row1[15],
                                                    educational_id: row1[16],
                                                    degreeName: row1[17],
                                                    instituteName: row1[18],
                                                    cgpa: row1[19],
                                                    experience_id: row1[20],
                                                    companyName: row1[21],
                                                    position: row1[22],
                                                    description: row1[23]
                                                };

                                                //array.push(component);
                                                //array.push(component);
                                                res.send(component);
                                            }
                                        );
                                    }
                                );
                            }
                        }
                    );
                }
            }
        );
        //res.send(array);
    });

    app.post("/api/users/delete", (req, res) => {
        //console.log("request");
        //console.log(req);
        //console.log(req.body);

        //console.log(req.body);
        const bindvars = {
            id: parseInt(req.body.id)
        };

        //res.send({ hi: "tehr" });
        console.log(bindvars);
        // //res.send(bindvars);

        connection.execute(
            "begin Project_Del.deleteUser(:id); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
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

    app.post(
        "/api/users/delete/education",

        (req, res) => {
            const bindvars = {
                id: req.body.id
            };

            connection.execute(
                "begin Project_Del.deleteEducation(:id); end;",
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

    app.delete(
        "/api/users/delete/experience",

        (req, res) => {
            const bindvars = {
                id: req.body.id
            };

            connection.execute(
                "begin Project_Del.deleteExperience(:id); end;",
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

    app.post("/api/users/education", (req, res) => {
        const bindvars = {
            User_account_id: parseInt(ID),
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
                    console.log("happen");
                    res.send("done");
                }
            }
        );
    });

    app.post("/api/users/experience", (req, res) => {
        const bindvars = {
            User_account_id: parseInt(ID),
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
                    console.log("result.rowsAffected");
                    res.send("done");
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

                connection.execute(
                    "select max(id) from user_account",
                    {},
                    function(err, result) {
                        ID = result.rows[0][0];
                        console.log(ID);
                        res.send("Hi");
                    }
                );
                //res.json(result.rowsAffected);

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
                    res.json({ msg: "Username not Matched" });
                } else {
                    try {
                        const password = result.rows[0][5];
                        if (password != value.Pass) {
                            console.log("password not match");
                            throw "password";
                            //return res.json({ msg: "Password not Matched" });
                        } else {
                            setTimeout(() => {
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
                            }, 10000);
                        }
                    } catch (err) {
                        return res.json({
                            msg: "UserName and Password is wrong"
                        });
                    } finally {
                    }

                    // const password = result.rows[0][5];

                    // if (password != value.Pass) {
                    //     console.log("password not match");
                    //     return res.json({ msg: "Password not Matched" });
                    // } else {
                    //     setTimeout(() => {}, 5000);
                    //     const keys = "secret";

                    //     const payload = {
                    //         id: result.rows[0][0],
                    //         name: result.rows[0][1],
                    //         type: 1
                    //     };

                    //     jwt.sign(
                    //         payload,
                    //         keys,
                    //         { expiresIn: 3600 },
                    //         (err, token) => {
                    //             res.json({
                    //                 success: true,
                    //                 token: "Bearer " + token
                    //             });
                    //         }
                    //     );
                    // }
                }
            }
        );
    });

    // app.post(
    //     "/api/users/education",
    //     passport.authenticate("jwt", { session: false }),
    //     (req, res) => {
    //         const bindvars = {
    //             User_account_id: parseInt(req.user.id),
    //             DegreeName: req.body.DegreeName,
    //             InstituteName: req.body.InstituteName,
    //             Cgpa: req.body.Cgpa
    //         };

    //         connection.execute(
    //             "begin Project.insertEducation(:User_account_id,:DegreeName,:InstituteName,:Cgpa); end;",
    //             bindvars,
    //             function(err, result) {
    //                 if (err) {
    //                     console.log("error");
    //                     console.log(err);
    //                 } else {
    //                     res.send(result[0]);
    //                 }
    //             }
    //         );
    //     }
    // );

    // app.post(
    //     "/api/users/experience",
    //     passport.authenticate("jwt", { session: false }),
    //     (req, res) => {
    //         const bindvars = {
    //             User_account_id: parseInt(req.user.id),
    //             CompanyName: req.body.CompanyName,
    //             Position: req.body.Position,
    //             Description: req.body.Description
    //         };

    //         connection.execute(
    //             "begin Project.insertExperience(:User_account_id,:CompanyName,:Position,:Description); end;",
    //             bindvars,
    //             function(err, result) {
    //                 if (err) {
    //                     console.log("error");
    //                     console.log(err);
    //                 } else {
    //                     res.send(result[0]);
    //                 }
    //             }
    //         );
    //     }
    // );

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
