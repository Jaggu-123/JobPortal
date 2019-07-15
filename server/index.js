const express = require("express");
const oracledb = require("oracledb");

oracledb.autoCommit = true;

const app = express();

const mypass = "Manish9113789552";
let conn;

async function run() {
    try {
        conn = await oracledb.getConnection({
            user: "SYSTEM",
            password: mypass,
            connectString: "localhost/Bank"
        });
        console.log("connect");
        //"begin Project.insertUser(:u1, :u2, :u3, :u4, :u5, :u6 ,:u7,:p1,:p2,:p3,:p4,:p5); end;"
        //const sqlQuery = `Project.insertAddress(:1, :2, :3, :4, :5);`;insert into addresses(id, streetAddress,city,state,country,zip) values (2, 'main', 'bokaro','jahrk','india','ytu');
        // var bindvars = {
        //     ini: "Manish",
        //     oui: {
        //         dir: oracledb.BIND_OUT,
        //         type: oracledb.STRING,
        //         maxSize: 32767
        //     },
        //     otyui: {
        //         dir: oracledb.BIND_OUT,
        //         type: oracledb.STRING,
        //         maxSize: 32767
        //     }
        // };

        conn.execute("select count(userName) from own", {}, function(
            err,
            result
        ) {
            if (err) {
                error = err;
                return;
            }
            //console.log(bindvars);
            console.log("kuvh");
            //console.log(result);
            user = result.rowsAffected;
            error = null;

            console.log(result.rows[0][0]);

            // connection.close(function(err) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     console.log("close");
            // });
        });

        // const result = await conn.execute(
        //     "begin AddressHere(:ini, :oui,:otyui); end;",
        //     bindvars
        // );

        // console.log(result.outBinds);
        //console.log(bindvars);

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
