import express from "express";
import { UserRouter } from "../user/user.router";

const router = express.Router();

export class RouterClass{
    router = express.Router();
    constructor(){
        this.config();
    }
    private config(){
        this.router.use('/',UserRouter)
    }
}
export  const Routes = new RouterClass().router;