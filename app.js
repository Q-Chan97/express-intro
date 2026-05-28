import express from "express";
import authorRouter from "./routers/authorRouter.js";
import bookRouter from "./routers/bookRouter.js";
import indexRouter from "./routers/indexRouter.js";

const app = express();

const PORT = 3000;

app.use("/", indexRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Express server listening on port ${PORT}.`);
})