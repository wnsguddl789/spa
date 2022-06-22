const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
app.use("/resource", express.static(path.resolve(__dirname, "resource")));

app.get("/*", (req, res) => {
	res.sendFile(
		path.resolve(__dirname, "resource", "static", "html", "index.html")
	);
});

app.listen(port, () => console.log(`Server is Running On ${port} PORT`));
