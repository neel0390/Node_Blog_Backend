const express = require("express");
const app = express();
const apiroute = require("./routes/ApiRoute");
const PORT = 4000;
const cors = require("cors");

app.use(cors());
app.use("/", apiroute);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
