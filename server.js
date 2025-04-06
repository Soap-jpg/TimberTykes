const express = require("express");

const path = require("path");

const app = express();

const expRoutes = require("./routes/exp");
const main_page = require("./routes/main_page");

app.use(express.static(path.join(__dirname, "public")));

app.use(expRoutes);
app.use(main_page);

app.listen(process.env.PORT || 3000);
