const express = require("express");
const app = express();

app.set("view engine", "ejs");

const items = [
	{ name: "Laptop", price: 800 },
	{ name: "Phone", price: 500 },
	{ name: "Tablet", price: 300 },
];

app.get("/", (req, res) => {
	res.render("index", { items });
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
