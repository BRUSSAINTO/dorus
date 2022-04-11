require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const limiter = require("./constants/limiter");
const { errors } = require("celebrate");
const corsOptions = require("./constants/cors");
const routerApp = require("./routes/index");
const handlerErrors = require("./errors/handler-errors");
const { PORT } = require("./constants/configure");

const { requestLogger, errorLogger } = require("./middlewares/logger");

const app = express();

app.use(cors(corsOptions));
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routerApp);

app.use(errorLogger);
app.use(errors());
app.use(handlerErrors);
app.listen(PORT, () => {});
