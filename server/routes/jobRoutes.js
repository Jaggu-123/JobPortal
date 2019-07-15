module.exports = (app, connection) => {
    app.get("/api/jobsmultiple/jobactivitydata", (req, res) => {
        const bindvars = {
            id: req.query.id
        };
        connection.execute(
            "select * from job_activity where id= :id ",
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
                                    var row1 = result.rows[0];
                                    // var component = {
                                    //     userName:row1[1],
                                    //     firstName:row1[2],
                                    //     lastName:row1[3],
                                    //     email :row1[4],
                                    //     pass :row1[5],
                                    //     gender :row1[6],
                                    //     contactNo :row1[7],
                                    //     addressID:row1[8]

                                    // };
                                    var bindcompany = {
                                        id: row1[10]
                                    };
                                    // ans.push(component);
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

                                                var component = {
                                                    id: row1[0],
                                                    userName: row1[1],
                                                    firstName: row1[2],
                                                    lastName: row1[3],
                                                    email: row1[4],
                                                    pass: row1[5],
                                                    gender: row1[8],
                                                    contactNo: row1[9],
                                                    streetAddress: row1[11],
                                                    city: row1[12],
                                                    photo: row1[6],
                                                    state: row1[13],
                                                    country: row1[14],
                                                    zip: row1[15]
                                                };
                                                //array.push(component);
                                                ans.push(component);
                                                // res.send(array);
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                    setTimeout(() => {
                        res.send(ans);
                    }, 3000);
                }
            }
        );
    });

    app.post("/api/job/delete", (req, res) => {
        const bind = {
            id: parseInt(req.body.id)
        };

        console.log(bind);

        connection.execute("begin Project.deletejon(:id); end;", bind, function(
            err,
            result
        ) {
            if (err) {
                console.log(err);
            } else {
                res.send("deletejob");
            }
        });
    });

    app.post("/api/jobs/register", (req, res) => {
        var bindvars = {
            CompanyID: req.body.companyid,
            JobPostName: req.body.jobPostName,
            IsActive: req.body.active,
            JobDescription: req.body.description,
            Salary: req.body.salary,
            Skill: req.body.skill,
            JobType: req.body.jobType,
            StreetAddress: req.body.streetAddress,
            City: req.body.city,
            State: req.body.state,
            Country: req.body.country,
            Zip: req.body.zip
        };

        console.log(bindvars);

        connection.execute(
            "begin Project.insertJobEvent(:CompanyID,:JobPostName,:IsActive,:JobDescription,:Salary,:Skill,:JobType,:StreetAddress,:City,:State,:Country,:Zip); end;",
            bindvars,
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(result.rowsAffected);
                    res.json({ hi: "hello" });
                }
            }
        );
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
                    res.send("hi");
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
                                                        console.log(component);
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
                var ans = [];
                result.rows.map(arr => {
                    // var row = result.rows[i];

                    var bindpost = {
                        id: arr[2]
                    };

                    var bindcompany = {
                        id: arr[1]
                    };
                    setTimeout(() => {
                        connection.execute(
                            "select * from job_post where id = :id",
                            bindpost,
                            function(err, result) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var row1 = result.rows[0][1];
                                    setTimeout(() => {
                                        connection.execute(
                                            "select companyName,logo from company_account where id = :id",
                                            bindcompany,
                                            function(err, result) {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    arr.push(row1);
                                                    arr.push(result.rows[0][0]);
                                                    arr.push(result.rows[0][1]);
                                                    //var array = [];
                                                    var component = {
                                                        id: arr[0],
                                                        companyName: arr[10],
                                                        logo: arr[11],
                                                        job_post: arr[9],
                                                        isActive: arr[3],
                                                        jobDescription: arr[4],
                                                        salary: arr[5],
                                                        skill: arr[6],
                                                        job_type: arr[7]
                                                    };
                                                    //array.push(component);
                                                    setTimeout(() => {
                                                        //console.log(ans);
                                                        ans.push(component);
                                                        //  console.log(ans);
                                                    }, 1000);
                                                    // ans.push(component);
                                                    // res.send(array);
                                                }
                                            }
                                        );
                                    }, 1000);
                                }
                            }
                        );
                    }, 1000);
                });
                // console.log(ans);
                setTimeout(() => {
                    // console.log(ans);
                    res.send(ans);
                }, 7000);
            }
        });
    });
    app.get("/api/jobsmultiple/salary", (req, res) => {
        const bindvars = {
            salary: req.query.options
        };
        connection.execute(
            "select * from job_event where salary= :salary",
            bindvars,
            function(err, result) {
                var rowsProcessed = 0;
                if (err) {
                    console.log(err);
                } else {
                    rowsProcessed = result.rows.length;
                    var ans = [];
                    result.rows.map(arr => {
                        // var row = result.rows[i];

                        var bindpost = {
                            id: arr[2]
                        };

                        var bindcompany = {
                            id: arr[1]
                        };
                        setTimeout(() => {
                            connection.execute(
                                "select * from job_post where id = :id",
                                bindpost,
                                function(err, result) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        var row1 = result.rows[0][1];
                                        setTimeout(() => {
                                            connection.execute(
                                                "select companyName,logo from company_account where id = :id",
                                                bindcompany,
                                                function(err, result) {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        arr.push(row1);
                                                        arr.push(
                                                            result.rows[0][0]
                                                        );
                                                        arr.push(
                                                            result.rows[0][1]
                                                        );
                                                        //var array = [];
                                                        var component = {
                                                            id: arr[0],
                                                            companyName:
                                                                arr[10],
                                                            logo: arr[11],
                                                            job_post: arr[9],
                                                            isActive: arr[3],
                                                            jobDescription:
                                                                arr[4],
                                                            salary: arr[5],
                                                            skill: arr[6],
                                                            job_type: arr[7]
                                                        };
                                                        //array.push(component);
                                                        setTimeout(() => {
                                                            //console.log(ans);
                                                            ans.push(component);
                                                            //  console.log(ans);
                                                        }, 1000);
                                                        // ans.push(component);
                                                        // res.send(array);
                                                    }
                                                }
                                            );
                                        }, 1000);
                                    }
                                }
                            );
                        }, 1000);
                    });
                    // console.log(ans);
                    setTimeout(() => {
                        // console.log(ans);
                        res.send(ans);
                    }, 7000);
                }
            }
        );
    });

    app.get("/api/jobsmultiple/active", (req, res) => {
        connection.execute(
            "select * from job_event where isActive=1",
            {},
            function(err, result) {
                var rowsProcessed = 0;
                if (err) {
                    console.log(err);
                } else {
                    rowsProcessed = result.rows.length;
                    var ans = [];
                    result.rows.map(arr => {
                        // var row = result.rows[i];

                        var bindpost = {
                            id: arr[2]
                        };

                        var bindcompany = {
                            id: arr[1]
                        };
                        setTimeout(() => {
                            connection.execute(
                                "select * from job_post where id = :id",
                                bindpost,
                                function(err, result) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        var row1 = result.rows[0][1];
                                        setTimeout(() => {
                                            connection.execute(
                                                "select companyName,logo from company_account where id = :id",
                                                bindcompany,
                                                function(err, result) {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        arr.push(row1);
                                                        arr.push(
                                                            result.rows[0][0]
                                                        );
                                                        arr.push(
                                                            result.rows[0][1]
                                                        );
                                                        //var array = [];
                                                        var component = {
                                                            id: arr[0],
                                                            companyName:
                                                                arr[10],
                                                            logo: arr[11],
                                                            job_post: arr[9],
                                                            isActive: arr[3],
                                                            jobDescription:
                                                                arr[4],
                                                            salary: arr[5],
                                                            skill: arr[6],
                                                            job_type: arr[7]
                                                        };
                                                        //array.push(component);
                                                        setTimeout(() => {
                                                            //console.log(ans);
                                                            ans.push(component);
                                                            //  console.log(ans);
                                                        }, 1000);
                                                        // ans.push(component);
                                                        // res.send(array);
                                                    }
                                                }
                                            );
                                        }, 1000);
                                    }
                                }
                            );
                        }, 1000);
                    });
                    // console.log(ans);
                    setTimeout(() => {
                        // console.log(ans);
                        res.send(ans);
                    }, 7000);
                }
            }
        );
    });
    app.get("/api/jobsmultiple/job_type", (req, res) => {
        const bindvars = {
            job_type: req.query.options
        };
        connection.execute(
            "select * from job_event where job_type= :job_type",
            bindvars,
            function(err, result) {
                var rowsProcessed = 0;
                if (err) {
                    console.log(err);
                } else {
                    rowsProcessed = result.rows.length;
                    var ans = [];
                    result.rows.map(arr => {
                        // var row = result.rows[i];

                        var bindpost = {
                            id: arr[2]
                        };

                        var bindcompany = {
                            id: arr[1]
                        };
                        setTimeout(() => {
                            connection.execute(
                                "select * from job_post where id = :id",
                                bindpost,
                                function(err, result) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        var row1 = result.rows[0][1];
                                        setTimeout(() => {
                                            connection.execute(
                                                "select companyName,logo from company_account where id = :id",
                                                bindcompany,
                                                function(err, result) {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        arr.push(row1);
                                                        arr.push(
                                                            result.rows[0][0]
                                                        );
                                                        arr.push(
                                                            result.rows[0][1]
                                                        );
                                                        //var array = [];
                                                        var component = {
                                                            id: arr[0],
                                                            companyName:
                                                                arr[10],
                                                            job_post: arr[9],
                                                            logo: arr[11],
                                                            isActive: arr[3],
                                                            jobDescription:
                                                                arr[4],
                                                            salary: arr[5],
                                                            skill: arr[6],
                                                            job_type: arr[7]
                                                        };
                                                        //array.push(component);
                                                        setTimeout(() => {
                                                            //console.log(ans);
                                                            ans.push(component);
                                                            //  console.log(ans);
                                                        }, 1000);
                                                        // ans.push(component);
                                                        // res.send(array);
                                                    }
                                                }
                                            );
                                        }, 1000);
                                    }
                                }
                            );
                        }, 1000);
                    });
                    // console.log(ans);
                    setTimeout(() => {
                        console.log(ans);
                        res.send(ans);
                    }, 7000);
                }
            }
        );
    });

    // app.get("/api/jobsmultiple", (req, res) => {
    //     connection.execute("select * from job_event", {}, function(
    //         err,
    //         result
    //     ) {
    //         var rowsProcessed = 0;
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             rowsProcessed = result.rows.length;
    //             //console.log(result);
    //             // const ans = array(rowsProcessed, result);
    //             // console.log(ans);
    //             // console.log(rowsProcessed);
    //             var ans = [];
    //             for (var i = 0; i < rowsProcessed; i++) {
    //                 var row = result.rows[i];
    //                 console.log(row);
    //                 var bindpost = {
    //                     id: row[2]
    //                 };

    //                 var bindcompany = {
    //                     id: row[1]
    //                 };

    //                 connection.execute(
    //                     "select * from job_post where id = :id",
    //                     bindpost,
    //                     function(err, result) {
    //                         if (err) {
    //                             console.log(err);
    //                         } else {
    //                             // console.log(result);
    //                             var row1 = result.rows[0][1];

    //                             connection.execute(
    //                                 "select * from company_account where id = :id",
    //                                 bindcompany,
    //                                 function(err, result) {
    //                                     if (err) {
    //                                         console.log(err);
    //                                     } else {
    //                                         //console.log(result.rows);
    //                                         row.push(row1);
    //                                         row.push(result.rows[0][3]);
    //                                         //var array = [];

    //                                         var component = {
    //                                             id: row[0],
    //                                             companyName: row[10],
    //                                             job_post: row[9],
    //                                             isActive: row[3],
    //                                             jobDescription: row[4],
    //                                             salary: row[5],
    //                                             skill: row[6],
    //                                             job_type: row[7],
    //                                             logo: result.rows[0][8]
    //                                         };
    //                                         //console.log(row);
    //                                         //array.push(component);
    //                                         ans.push(component);
    //                                         //console.log("Push");
    //                                         // res.send(ans);
    //                                     }
    //                                 }
    //                             );
    //                         }
    //                     }
    //                 );
    //             }
    //             setTimeout(() => {
    //                 //console.log(ans);
    //                 res.send(ans);
    //             }, 3000);
    //         }
    //     });
    // });

    // app.get("/api/jobsmultiple/salary", (req, res) => {
    //     const bindvars = {
    //         salary: req.query.options
    //     };
    //     connection.execute(
    //         "select * from job_event where salary= :salary ",
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
    //                                             //res.send(ans);
    //                                         }
    //                                     }
    //                                 );
    //                             }
    //                         }
    //                     );
    //                 }
    //                 setTimeout(() => {
    //                     console.log(ans);
    //                     res.send(ans);
    //                 }, 3000);
    //             }
    //         }
    //     );
    // });

    // app.get("/api/jobsmultiple/active", (req, res) => {
    //     const bindvars = {
    //         isActive: 1
    //     };
    //     connection.execute(
    //         "select * from job_event where isActive= :isActive ",
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
    //                                             // res.send(ans);
    //                                         }
    //                                     }
    //                                 );
    //                             }
    //                         }
    //                     );
    //                 }
    //                 setTimeout(() => {
    //                     console.log(ans);
    //                     res.send(ans);
    //                 }, 3000);
    //             }
    //         }
    //     );
    // });

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
