const dotenv    = require("dotenv");
dotenv.config();
//global.config   = require("./config/config");
const dbConnection = require("./config/database");
dbConnection.connect();
const express   = require("express");

const app       = express();
app.use(express.json());

app.use("/user", require("./routes/user"));
app.use("/coupon", require("./routes/coupon"));
app.get('/test/', (req,res) => {
    return res.json({
        success: 1,
        message: 'Node js is working fine'
    });
});

app.listen(process.env.PORT, () => {
    console.log("Server up and running on port : ", process.env.PORT);
});