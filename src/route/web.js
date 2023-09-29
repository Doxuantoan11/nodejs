import express from "express";
import homeController from "../controller/homeController";


let router = express.Router();

const initWebRoute =(app) => {
    router.get('/',homeController.getHomepage);
    router.get('/login',homeController.getUserLogin);
    // router.post('/login',homeController.postUserLogin);
    router.get('/signup',homeController.getUserSignup);
    // router.post('/signup',homeController.postUserSignup);
    return app.use('/', router);
}

export default  initWebRoute;