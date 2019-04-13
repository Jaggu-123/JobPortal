const express = require("express");
const oracledb = require("oracledb");

oracledb.autoCommit = true;

const app = express();

const mypass = "Manish9113789552";
let connection;

async function run() {
    try {
        connection = await oracledb.getConnection({
            user: "SYSTEM",
            password: mypass,
            connectString: "localhost/Bank"
        });
        console.log("connect");
        //"begin Project.insertUser(:u1, :u2, :u3, :u4, :u5, :u6 ,:u7,:p1,:p2,:p3,:p4,:p5); end;"
        //const sqlQuery = `Project.insertAddress(:1, :2, :3, :4, :5);`;insert into addresses(id, streetAddress,city,state,country,zip) values (2, 'main', 'bokaro','jahrk','india','ytu');
        var bindvars = {
            // e1: 1,
            // e2: "b.tech",
            // e3: "IIITA",
            // e4: "9.8"
            u1: "Jaggu",
            u2: "Manish",
            u3: "Jagnani",
            u4: "mha@gmail.com",
            u5: "Manish",
            u6: "male",
            u7: "lorem ipsum"
            // p1: "offyu",
            // p2: "lkijo",
            // p3: "lofgrhk",
            // p4: "lhfdgkj",
            // p5: "lgdfgjh"
        };

        connection.execute(
            "begin Project.insertCompany(:u1, :u2, :u3,:u4,:u5,:u6,:u7); end;",
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

                console.log(result.rowsAffected);

                connection.close(function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("close");
                });
            }
        );

        // connection.execute(
        //     `insert into addresses(id, streetAddress, city, state, country, zip)
        //    values (0, :p1, :p2, :p3, :p4, :p5);`,
        //     // The equivalent call with PL/SQL named parameter syntax is:
        //     // "BEGIN testproc(p_in => :i, p_inout => :io, p_out => :o); END;",
        //     bindvars,
        //     function(err, result) {
        //         if (err) {
        //             console.error(err.message);
        //             return;
        //         }
        //         console.log("manish");
        //         console.log(result);
        //         console.log("jagnani");
        //     }
        // );
    } catch (err) {
        console.log(err);
    }
    // } finally {
    //     if (connection) {
    //         try {
    //             await connection.close();
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // }
}

run();

app.listen(5000, () => console.log("Server started"));
