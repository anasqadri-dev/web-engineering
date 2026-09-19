const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post("/", (req, res) => {
  const table = "entry";
  const name = req.body.user_name;
  const email = req.body.user_email;
  const message = req.body.user_message;
  var sql = `INSERT INTO ${table} VALUES ("${name}","${email}", "${message}");`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("1 record inserted");
    }
  });

  return res.redirect("/");
});

// app.post("/", (req, res) => {
//   const name = req.body.user_name;
//   const email = req.body.user_email;
//   const message = req.body.user_message;
//   console.log(name + " " + email + " " + message);
// //   return res.redirect("/");
// });

app.get("/messages", (req, res) => {
  var sql = `select * from entry;`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      return res.render("messages", { data: result });
    }
  });
});

// app.get("/messages", (req, res) => {
//     const data = [ 
//                   {name: "john", email: "john@doe.com", message: "This is a dummy message from john"}, 
//                   {name: "albus", email: "albus@doe.com", message: "This is a dummy message from albus"}
//                  ]
//     return res.render("messages", { data: data});
// });

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: '',
  database: 'formdb'
});

connection.connect(err => {
  if (err) {
    console.log(err);
  }
  else {
  console.log('Connected to database');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});