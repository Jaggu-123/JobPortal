module.exports = (app, connection) => {
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
};
