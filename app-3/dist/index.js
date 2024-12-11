"use strict";
//type 1 without mocking 
// (npx prisma generate)
// import { PrismaClient } from "@prisma/client"; //-> note: here there is no use of db.ts because we are importing it here itself  
// import express from "express";
// import { z } from "zod";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// export const app = express();
// app.use(express.json());
// //const prismaClient = new PrismaClient();
// const sumInput = z.object({
//     a: z.number(),
//     b: z.number()
// })
// //@ts-ignore
// app.post("/sum", (req, res) => {
//     const parsedResponse = sumInput.safeParse(req.body)
//     if (!parsedResponse.success) {
//         return res.status(411).json({
//             message: "Incorrect inputs"
//         })
//     }
//     const answer = parsedResponse.data.a + parsedResponse.data.b;
//     res.json({
//         answer
//     })
// });
// //@ts-ignore
// app.get("/sum", async(req, res) => {
//     const parsedResponse = sumInput.safeParse({
//         a: Number(req.headers["a"]),
//         b: Number(req.headers["b"])
//     })
//     if (!parsedResponse.success) {
//         return res.status(411).json({
//             message: "Incorrect inputs"
//         })
//     }
//     const answer = parsedResponse.data.a + parsedResponse.data.b;
//     prismaClient.sum.create({
//         data: {
//             a:parsedResponse.data.a,
//             b:parsedResponse.data.b,
//             result: answer
//         }
//     })
//     res.json({
//         answer
//     })
// });
//type 2 with mocking
//import { PrismaClient } from "@prisma/client";
const db_1 = require("./db");
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
//const prismaClient = new PrismaClient();
const sumInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
//@ts-ignore
exports.app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;
    res.json({
        answer
    });
});
//@ts-ignore
exports.app.get("/sum", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    });
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;
    db_1.prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer,
            type: "Sum"
        }
    });
    res.json({
        answer
    });
}));
//@ts-ignore
exports.app.get("/multiply", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    });
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }
    const answer = parsedResponse.data.a + parsedResponse.data.b;
    db_1.prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer,
            type: "Multiply"
        }
    });
    res.json({
        answer
    });
}));
