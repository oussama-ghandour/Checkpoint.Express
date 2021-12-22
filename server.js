const express = require("express");
const app = express();
const date = new Date();
const day = date.getDay();
const hours = date.getHours();
const midlleweare = (req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
    next();
  } else {
    res.send("serverClose");
  }
};
app.use(midlleweare);
app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/Public/home.html");
// });
// app.get("/ourservices", (req, res) => {
//   res.sendFile(__dirname + "/Public/ourservices.html");
// });
// app.get("/contacts", (req, res) => {
//   res.sendFile(__dirname + "/Public/contacts.html");
// });
// app.get("/style.css", (req, res) => {
//   res.sendFile(__dirname + "/Public/style.css");
// });
app.use((req, res) => {
  res.status(404).render("404");
});
const port = 5000;
app.listen(port, () => console.log(`server is runnig on the port ${port} `));
