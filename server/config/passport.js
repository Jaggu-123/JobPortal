const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = (passport, connection) => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            console.log(jwt_payload);

            const bindvars = {
                id: jwt_payload.id
            };

            if (jwt_payload.type == 1) {
                connection.execute(
                    "select * from user_account where id = :id",
                    bindvars,
                    function(err, result) {
                        if (err) {
                            console.log(err);
                            console.log("err");
                            console.log(result);
                            return done(null, false);
                        } else {
                            console.log(result);
                            const user = {
                                id: result.rows[0][0],
                                userName: result.rows[0][1],
                                firstName: result.rows[0][1],
                                lastName: result.rows[0][2],
                                email: result.rows[0][3],
                                pass: result.rows[0][4],
                                gender: result.rows[0][5]
                            };

                            return done(null, user);
                        }
                    }
                );
            } else if (jwt_payload.type == 2) {
                connection.execute(
                    "select * from company_account where id = :id",
                    bindvars,
                    function(err, result) {
                        if (err) {
                            console.log("err");

                            return done(null, false);
                        } else {
                            const company = {
                                id: result.rows[0][0],
                                userName: result.rows[0][1],
                                pass: result.rows[0][1],
                                companyName: result.rows[0][2],
                                email: result.rows[0][3],
                                bussinessStream: result.rows[0][4],
                                description: result.rows[0][5]
                            };

                            return done(null, company);
                        }
                    }
                );
            } else {
                connection.execute(
                    "select * from own where id = :id",
                    bindvars,
                    function(err, result) {
                        if (err) {
                            console.log("err");

                            return done(null, false);
                        } else {
                            const admin = {
                                id: result.rows[0][0],
                                userName: result.rows[0][1],
                                pass: result.rows[0][4],
                                fullName: result.rows[0][2],
                                email: result.rows[0][3]
                            };

                            return done(null, admin);
                        }
                    }
                );
            }
        })
    );
};
