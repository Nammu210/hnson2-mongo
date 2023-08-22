const express = require("express");
const route = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/api", route);

app.get("/", (req, res) => {
  res.send({
    msg: "default page",
  });
});

//comee
app.listen(4000, () => {
  console.log("connection running in port no 4000");
});
