import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client(
  {
    user: "postgres",
    host: "localhost",
    database: "authentication",
    password: "dev37400",
    port: 5432,
  }
)
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try{
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [username]);
    console.log(checkResult.rows);
    if(checkResult.rows.length > 0){
      res.send("Email already exists. Try Logging in.")
    }else{
      
        await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [username, password]);
        res.render("secrets.ejs");
      
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const check = await db.query("SELECT * FROM users WHERE email = $1", [username]);
    console.log(password, check.rows[0].password);
    if(check.rows.length == 0){
      res.send("You Have Entered wrong email add. Register Yourself First");
    }else if(check.rows[0].password != password){
      res.send("You have entered wrong password. Try again");
    }else{
      res.render("secrets .ejs");
    }
  } catch (err) {
    console.log(err);
  }

  // console.log(username, password);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
