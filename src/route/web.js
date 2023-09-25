import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute =(app) => {
    router.get('/',homeController.getHomepage);
    router.get('/sua/:id',homeController.editUserPage);
    return app.use('/', router);
}

export default  initWebRoute;