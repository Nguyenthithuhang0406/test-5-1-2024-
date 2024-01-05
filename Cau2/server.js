
const express = require("express");
const { connectDB } = require("./db");
;
const app = express();

const PORT = 4006;

const oder = [
  { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
  { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
  { "_id" : 3, "item" : "pecans", "price" : 20, "quantity" : 3 },
];
const inventory = [
  { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
  { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
  { "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
  { "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
];

const user = [
	{"username": "admin", password: "MindX@2022"},
	{"username": "alice", password: "MindX@2022"}
];

app.get("/oder", (req, res) => {
  res.send(oder);
});

app.get("/inventory", (req, res) => {
  res.send(inventory);
});

app.get("user", (req, res) => {
  res.send(user);
});

connectDB()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err =>", err);
  });