module.exports = (app, connection) => {
    app.get("/api/jobsmultiple/jobactivitydata", (req, res) => {
        const bindvars = {
            id: req.body.id
        };
        connection.execute(
            "select * from job_activity where id= :id ",
            bindvars,
            function(err, result) {
                var rowsProcessed = 0;
                if (err) {
                    console.log(err);
                } else {
                    rowsProcessed = results.rows.length;
                    var ans = [];
                    for (var i = 0; i < rowsProcessed; i++) {
                        var row = result.rows[i];

                        var bindpost = {
                            id: row[1]
                        };

                        var bindcompany = {
                            id: row[1]
                        };

                        connection.execute(
                            "select * from user_account where id = :id",
                            bindpost,
                            function(err, result) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var row1 = result.rows[0][1];
                                    var component = {
                                        userName: row1[1],
                                        firstName: row1[2],
                                        lastName: row1[3],
                                        email: row1[4],
                                        pass: row1[5],
                                        gender: row1[6],
                                        contactNo: row1[7],
                                        addressID: row1[8]
                                    };
                                    ans.push(component);
                                }
                            }
                        );
                    }
                    res.send(ans);
                }
            }
        );
    });

    app.post("/api/jobs/register", (req, res) => {
        console.log(req.body);
        res.json("success");
    });

    app.post("/api/job/apply", (req, res) => {
        var bindvars = {
            id: req.body.id,
            user_account_id: req.body.user_account_id
        };
        connection.execute(
            "insert into job_activity(id, user_account_id) values (:id, :user_account_id)",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            }
        );
    });

    app.get("/api/job/detail", (req, res) => {
        const bindvars = {
            id: req.query.id
            //id: req.body.id
        };
        connection.execute(
            "select * from job_event where id = :id",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    var row = result.rows[0];

                    var bindpost = {
                        id: row[2]
                    };

                    var bindcompany = {
                        id: row[1]
                    };

                    var bindAddress = {
                        id: row[8]
                    };

                    connection.execute(
                        "select * from addresses where id = :id",
                        bindAddress,
                        function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                var row2 = result.rows[0];

                                connection.execute(
                                    "select * from job_post where id = :id",
                                    bindpost,
                                    function(err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            var row1 = result.rows[0][1];

                                            connection.execute(
                                                "select * from company_account where id = :id",
                                                bindcompany,
                                                function(err, result) {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        row.push(row1);
                                                        row.push(
                                                            result.rows[0][3]
                                                        );
                                                        row.push(
                                                            result.rows[0][4]
                                                        );
                                                        row.push(
                                                            result.rows[0][5]
                                                        );
                                                        row.push(
                                                            result.rows[0][6]
                                                        );
                                                        row.push(
                                                            result.rows[0][7]
                                                        );
                                                        var array = [];

                                                        var component = {
                                                            id: row[0],
                                                            companyName:
                                                                row[10],
                                                            job_post: row[9],
                                                            isActive: row[3],
                                                            jobDescription:
                                                                row[4],
                                                            salary: row[5],
                                                            skill: row[6],
                                                            job_type: row[7],
                                                            email: row[11],
                                                            bussinessStream:
                                                                row[12],
                                                            description:
                                                                row[13],
                                                            websiteUrl: row[14],
                                                            streetAddress:
                                                                row2[1],
                                                            city: row2[2],
                                                            state: row2[3],
                                                            country: row2[4],
                                                            zip: row2[5],
                                                            logo:
                                                                result
                                                                    .rows[0][8]
                                                        };
                                                        array.push(component);
                                                        res.send(component);
                                                    }
                                                }
                                            );
                                        }
                                    }
                                );
                            }
                        }
                    );
                }
            }
        );
    });

    app.get("/api/jobs", (req, res) => {
        connection.execute("select * from job_event", {}, function(
            err,
            result
        ) {
            if (err) {
                console.log(err);
            } else {
                var row = result.rows[0];

                var bindpost = {
                    id: row[2]
                };

                var bindcompany = {
                    id: row[1]
                };

                connection.execute(
                    "select * from job_post where id = :id",
                    bindpost,
                    function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            var row1 = result.rows[0][1];

                            connection.execute(
                                "select companyName from company_account where id = :id",
                                bindcompany,
                                function(err, result) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        row.push(row1);
                                        row.push(result.rows[0][0]);
                                        var array = [];
                                        var component = {
                                            id: row[0],
                                            companyName: row[10],
                                            job_post: row[9],
                                            isActive: row[3],
                                            jobDescription: row[4],
                                            salary: row[5],
                                            skill: row[6],
                                            job_type: row[7]
                                        };
                                        array.push(component);
                                        res.send(array);
                                    }
                                }
                            );
                        }
                    }
                );
            }
        });
    });

    app.get("/api/jobsmultiple", (req, res) => {
        connection.execute("select * from job_event", {}, function(
            err,
            result
        ) {
            var rowsProcessed = 0;
            if (err) {
                console.log(err);
            } else {
                rowsProcessed = result.rows.length;
                // console.log(rowsProcessed);
                var ans = [];
                for (var i = 0; i < rowsProcessed; i++) {
                    var row = result.rows[i];
                    //console.log(row);
                    var bindpost = {
                        id: row[2]
                    };

                    var bindcompany = {
                        id: row[1]
                    };

                    connection.execute(
                        "select * from job_post where id = :id",
                        bindpost,
                        function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                // console.log(result);
                                var row1 = result.rows[0][1];

                                connection.execute(
                                    "select * from company_account where id = :id",
                                    bindcompany,
                                    function(err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            //console.log(result.rows);
                                            row.push(row1);
                                            row.push(result.rows[0][3]);
                                            //var array = [];

                                            var component = {
                                                id: row[0],
                                                companyName: row[10],
                                                job_post: row[9],
                                                isActive: row[3],
                                                jobDescription: row[4],
                                                salary: row[5],
                                                skill: row[6],
                                                job_type: row[7],
                                                logo: result.rows[0][8]
                                            };
                                            //console.log(row);
                                            //array.push(component);
                                            ans.push(component);
                                            res.send(ans);
                                        }
                                    }
                                );
                            }
                        }
                    );
                }
                // res.send(ans);
            }
        });
    });

    app.get("/api/jobsmultiple/salary", (req, res) => {
        const bindvars = {
            salary: req.query.options
        };
        connection.execute(
            "select * from job_event where salary= :salary ",
            bindvars,
            function(err, result) {
                var rowsProcessed = 0;
                if (err) {
                    console.log(err);
                } else {
                    rowsProcessed = result.rows.length;
                    var ans = [];
                    for (var i = 0; i < rowsProcessed; i++) {
                        var row = result.rows[i];

                        var bindpost = {
                            id: row[2]
                        };

                        var bindcompany = {
                            id: row[1]
                        };

                        connection.execute(
                            "select * from job_post where id = :id",
                            bindpost,
                            function(err, result) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var row1 = result.rows[0][1];

                                    connection.execute(
                                        "select companyName from company_account where id = :id",
                                        bindcompany,
                                        function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                row.push(row1);
                                                row.push(result.rows[0][0]);
                                                //var array = [];
                                                var component = {
                                                    id: row[0],
                                                    companyName: row[10],
                                                    job_post: row[9],
                                                    isActive: row[3],
                                                    jobDescription: row[4],
                                                    salary: row[5],
                                                    skill: row[6],
                                                    job_type: row[7]
                                                };
                                                //array.push(component);
                                                ans.push(component);
                                                res.send(ans);
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                    // res.send(ans);
                }
            }
        );
    });

    app.get("/api/jobsmultiple/active", (req, res) => {
        const bindvars = {
            isActive: 1
        };
        connection.execute(
            "select * from job_event where isActive= :isActive ",
            bindvars,
            function(err, result) {
                var rowsProcessed = 0;
                if (err) {
                    console.log(err);
                } else {
                    rowsProcessed = result.rows.length;
                    var ans = [];
                    for (var i = 0; i < rowsProcessed; i++) {
                        var row = result.rows[i];

                        var bindpost = {
                            id: row[2]
                        };

                        var bindcompany = {
                            id: row[1]
                        };

                        connection.execute(
                            "select * from job_post where id = :id",
                            bindpost,
                            function(err, result) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var row1 = result.rows[0][1];

                                    connection.execute(
                                        "select companyName from company_account where id = :id",
                                        bindcompany,
                                        function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                row.push(row1);
                                                row.push(result.rows[0][0]);
                                                //var array = [];
                                                var component = {
                                                    id: row[0],
                                                    companyName: row[10],
                                                    job_post: row[9],
                                                    isActive: row[3],
                                                    jobDescription: row[4],
                                                    salary: row[5],
                                                    skill: row[6],
                                                    job_type: row[7]
                                                };
                                                //array.push(component);
                                                ans.push(component);
                                                res.send(ans);
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                    // res.send(ans);
                }
            }
        );
    });

    // app.get("/api/jobsmultiple/job_type", (req, res) => {
    //     const bindvars = {
    //         job_type: req.query.options
    //     };
    //     connection.execute(
    //         "select * from job_event where job_type = :job_type ",
    //         bindvars,
    //         function(err, result) {
    //             var rowsProcessed = 0;
    //             salary;
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 rowsProcessed = result.rows.length;
    //                 var ans = [];
    //                 for (var i = 0; i < rowsProcessed; i++) {
    //                     var row = result.rows[i];

    //                     var bindpost = {
    //                         id: row[2]
    //                     };

    //                     var bindcompany = {
    //                         id: row[1]
    //                     };

    //                     connection.execute(
    //                         "select * from job_post where id = :id",
    //                         bindpost,
    //                         function(err, result) {
    //                             if (err) {
    //                                 console.log(err);
    //                             } else {
    //                                 var row1 = result.rows[0][1];

    //                                 connection.execute(
    //                                     "select companyName from company_account where id = :id",
    //                                     bindcompany,
    //                                     function(err, result) {
    //                                         if (err) {
    //                                             console.log(err);
    //                                         } else {
    //                                             row.push(row1);
    //                                             row.push(result.rows[0][0]);
    //                                             //var array = [];
    //                                             var component = {
    //                                                 id: row[0],
    //                                                 companyName: row[10],
    //                                                 job_post: row[9],
    //                                                 isActive: row[3],
    //                                                 jobDescription: row[4],
    //                                                 salary: row[5],
    //                                                 skill: row[6],
    //                                                 job_type: row[7]
    //                                             };
    //                                             //array.push(component);
    //                                             ans.push(component);
    //                                             res.send(ans);
    //                                         }
    //                                     }
    //                                 );
    //                             }
    //                         }
    //                     );
    //                 }
    //                 // res.send(ans);
    //             }
    //         }
    //     );
    // });

    // app.get("/api/jobsmultiple/companyName", (req, res) => {
    //     const bindvars = {
    //         companyName: req.query.options
    //     };
    //     connection.execute(
    //         "select * from job_event where company_id=(select id from company_account where companyName=:companyName); ",
    //         bindvars,
    //         function(err, result) {
    //             var rowsProcessed = 0;
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 rowsProcessed = result.rows.length;
    //                 var ans = [];
    //                 for (var i = 0; i < rowsProcessed; i++) {
    //                     var row = result.rows[i];

    //                     var bindpost = {
    //                         id: row[2]
    //                     };

    //                     var bindcompany = {
    //                         id: row[1]
    //                     };

    //                     connection.execute(
    //                         "select * from job_post where id = :id",
    //                         bindpost,
    //                         function(err, result) {
    //                             if (err) {
    //                                 console.log(err);
    //                             } else {
    //                                 var row1 = result.rows[0][1];

    //                                 connection.execute(
    //                                     "select companyName from company_account where id = :id",
    //                                     bindcompany,
    //                                     function(err, result) {
    //                                         if (err) {
    //                                             console.log(err);
    //                                         } else {
    //                                             row.push(row1);
    //                                             row.push(result.rows[0][0]);
    //                                             //var array = [];
    //                                             var component = {
    //                                                 id: row[0],
    //                                                 companyName: row[10],
    //                                                 job_post: row[9],
    //                                                 isActive: row[3],
    //                                                 jobDescription: row[4],
    //                                                 salary: row[5],
    //                                                 skill: row[6],
    //                                                 job_type: row[7]
    //                                             };
    //                                             //array.push(component);
    //                                             ans.push(component);
    //                                             res.send(ans);
    //                                         }
    //                                     }
    //                                 );
    //                             }
    //                         }
    //                     );
    //                 }
    //                 // res.send(ans);
    //             }
    //         }
    //     );
    // });
};
