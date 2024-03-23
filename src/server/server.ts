
import express from "express";
import cors from "cors";

const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));

app.get("/api/hello", (req, res) => {
  let foo:any = req.body
  console.log(foo)
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
