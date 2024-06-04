const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "productDetails",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as ID " + connection.threadId);
});

const getDetails = () => {
  connection.query("SELECT * FROM prodDetails", (error, results) => {
    if (error) {
      console.error("Error fetching users from the database: " + error.stack);
      return "error";
    }

    console.log("data", results);
    // Send the fetched data as a response
    return results;
  });
};

module.exports = { getDetails };
