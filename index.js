import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("Hellow world endpoint");
  console.log(req.headers);
  return res.send("Hello world");
});

app.get("/token/verify", (req, res) => {
  console.log("token verify endpoint");
  console.log(req.headers);
  const token = req.headers["token-verify"];
  const valid = token.length > 10 ? true : false;
  const email = token.length > 10 ? "admin@admin.com" : null;
  return res.status(200).send({ valid, email });
});

app.listen("3333", (error) => {
  console.error(error);
});
