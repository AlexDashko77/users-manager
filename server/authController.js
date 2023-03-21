const mysql = require("mysql");
const util = require("util");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users",
  password: "",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database -- OK");
  }
});

const query = util.promisify(conn.query).bind(conn);

class authController {
  registration(req, res) {
    let user = {};
    const { name, email, password } = req.body;
    conn.query("SELECT * FROM users", (err, res1) => {
      let same = 0;
      for (let i = 0; i < res1.length; i++) {
        if (res1[i]["email"] == email) {
          same = 1;
        }
      }
      if (same == 1) {
        res.json("false");
      } else {
        conn.query(
          `INSERT INTO users(firstname, email, password, reg_date, login_date, user_status) VALUES("${name}", "${email}", "${password}", now(), now(), "user")`
        );
        res.json("true");
      }
    });
  }
  login(req, res) {
    const { email, password } = req.body;
    conn.query("SELECT * FROM users", (err, res1) => {
      let find = 0;
      let user = {};
      for (let i = 0; i < res1.length; i++) {
        if (
          res1[i]["email"] == email &&
          res1[i]["password"] == password &&
          res1[i]["user_status"] != "blocked"
        ) {
          (async () => {
            const n = await query(
              `UPDATE users SET login_date = now() WHERE email = "${email}"`
            );
          })();
          user = res1[i];
          find = 1;
        }
      }
      if (find == 0) {
        res.json("false");
      } else {
        res.json(user);
      }
    });
  }
  getUsers(req, res) {
    conn.query("SELECT * FROM users", (err, res1) => {
      res.json(res1);
    });
  }
  delete(req, res) {
    let arr = req.body.added;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      conn.query(`DELETE FROM users WHERE id = ${arr[i]} LIMIT 1;`);
    }
    res.json("Удалено");
  }

  block(req, res) {
    let arr = req.body.added;
    for (let i = 0; i < arr.length; i++) {
      conn.query(
        `UPDATE users SET user_status = IF(user_status = "user", "blocked", "user") WHERE id = ${arr[i]} LIMIT 1;`
      );
    }
    res.json("Пользователи заблокированы");
  }
}

module.exports = new authController();
