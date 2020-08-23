const express = require("express");
const app = express();
const port = 3333;
const helmet = require("helmet");
const useragent = require("express-useragent");

const configureStore = require("./config/database");
configureStore();

app.use(helmet());
app.use(express.json());
app.use(useragent.express());

const routes = require("./config/routes");
app.use("/", routes);

app.listen(port, () => {
  console.log("listening on port", port);
});
