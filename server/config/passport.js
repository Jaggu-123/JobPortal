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

            connection.execute(
                "select * from user_account where id = :id",
                bindvars,
                function(err, result) {
                    if (err) {
                        console.log("err");

                        return done(null, false);
                    } else {
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
        })
    );
};
