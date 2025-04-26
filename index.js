import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'EJS'));

const database = new pg.Client({

    user: "postgres",
    password: "antonios",
    host: "localhost",
    port: 5432,
    database: "school",

})

database.connect();

app.get("/", (req, res) => {

    res.render("index");

})

app.post("/", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const result = await database.query("SELECT email, pass FROM users WHERE email = $1", [email]);

    if(result.rows.length === 0) {

        res.sendFile(__dirname + "/error.html");

    } else {

        const match = await checkPassword(password, result.rows[0].pass);

        if(match) {

            res.sendFile(__dirname + "/hello.html");

        } else {

            res.sendFile(__dirname + "/error.html");

        }

    }

})

app.get("/register", (req, res) => {

    res.render("register.ejs");

})

app.post("/register", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const hashed = await hashPassword(password);

    const result = await database.query("SELECT email, pass FROM users WHERE email = $1", [email]);

    console.log(result.rows);

    if(result.rows.length !== 0) {

        res.sendFile(__dirname + "/error.html");

    } else {

        await database.query("INSERT INTO users (email, pass) VALUES ($1, $2)", [email, hashed]);
        res.redirect("/");

    }

})

app.get("/forgot-password", (req, res) => {

    res.render("forgotPassword");

})

app.post("/forgot-password", async (req, res) => {

    const newPassword = req.body.newPassword;
    const confirmedPassword = req.body.confirmPassword;
    const user = req.body.email;

    console.log(newPassword);
    console.log(confirmedPassword);
    console.log(user);

    if(newPassword !== confirmedPassword) {

        res.redirect("/forgot-password");

    } else {

        const hashed = await hashPassword(newPassword);

        const result = await database.query("SELECT * FROM users WHERE email = $1", [user]);

        if(result.rows.length !== 0) {

            await database.query("UPDATE users SET pass = $1 WHERE email = $2", [hashed, user]);
            res.redirect("/");

        } else {

            res.sendFile(__dirname + "/error.html");

        }

    }

})

async function hashPassword(plainPassword) {

    const saltRounds = 12;
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    return hash;

}

async function checkPassword(plainPassword, hashedPasswordFromDB) {

    const match = await bcrypt.compare(plainPassword, hashedPasswordFromDB);
    return match;

}


app.listen(port, () => {

    console.log(`Server running on port ${port}`);

})