"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "reflect-metadata";
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4014;
app.get("/get", (req, res) => {
    res.status(200).json({ data: "Ok you may proceed" });
});
app.listen(PORT, () => {
    console.log(`Your Server has been running at http://localhost:${PORT}`);
});
