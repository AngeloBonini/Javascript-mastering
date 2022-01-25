import express from "express";
const serverApp = express();

serverApp.get("/testing", (req, res) => {
  res.send("HEY FRIEND");
})

serverApp.post("/testingPost")

serverApp.listen(3030, ()=> console.log("Server is up and running!!"))