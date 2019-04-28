const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const password = require("passport");
const cloudinary = require("cloudinary");
require("./handlers/cloudinary");
const upload = require("./handlers/multers");

oracledb.autoCommit = true;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(password.initialize());

const mypass = "Manish9113789552";
oracledb
    .getConnection({
        user: "SYSTEM",
        password: mypass,
        connectString: "localhost/Bank"
    })
    .then(connection => {
        console.log("connect");
        require("./config/passport")(password, connection);
        require("./routes/userRoutes")(app, connection, upload, cloudinary);
        require("./routes/companyRoutes")(app, connection);
        require("./routes/jobRoutes")(app, connection);
        require("./routes/adminRoutes")(app, connection);
    })
    .catch(err => {
        console.log(err);
    });

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log("Server Started"));
