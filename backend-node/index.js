const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();

const app = express();

// initialize middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
