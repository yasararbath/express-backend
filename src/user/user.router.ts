import express from "express";

export class UserRouterClass {
  router = express.Router();
  constructor() {
    this.config();
  }
  private config() {
    this.router.post("login");
  }
}
export const UserRouter = new UserRouterClass().router;
