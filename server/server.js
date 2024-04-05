import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("client/build"));
app.get("*", (req, res) =>
  res.sendFile(`${__dirname}/client/build/index.html`)
);

app.listen(process.env.PORT || 5001, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
