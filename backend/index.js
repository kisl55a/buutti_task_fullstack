const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

const bookComponent = require("./components/books");

app.use("/v1/books", bookComponent);

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
