import Router from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("This is the home page");
})


export default indexRouter;