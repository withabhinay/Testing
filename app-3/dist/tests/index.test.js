"use strict";
//basic try here
//import { expect, test } from 'vitest'
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
//test('true === true', () => {
// expect(true).toBe(true)
//})
//without mocking 
// import {describe, expect, it, } from 'vitest';
// import request from "supertest";
// import { app } from "../index"
// describe("POST /sum sun funtion here", () => {
//   it("should return the sum of two numbers", async () => {
//       const res = await request(app).post("/sum").send({
//         a: 1,
//         b: 2
//       });
//       expect(res.statusCode).toBe(200);
//       expect(res.body.answer).toBe(3);
//     });
//     it("should return 411 if no inputs are provided", async () => {
//       const res = await request(app).post("/sum").send({});
//       expect(res.statusCode).toBe(411);
//       expect(res.body.message).toBe("Incorrect inputs");
//     });
// });
// describe("GET /sum", () => {
//   it("should return the sum of two numbers", async () => {
//       const res = await request(app)
//         .get("/sum")
//         .set({
//           a: "1",
//           b: "2"
//         })
//         .send();
//       expect(res.statusCode).toBe(200);
//       expect(res.body.answer).toBe(3);
//   });
//   it("should return 411 if no inputs are provided", async () => {
//     const res = await request(app)
//       .get("/sum").send();
//     expect(res.statusCode).toBe(411);
//   });
// });
//mocking 
// import {describe, expect, test, it, vi} from 'vitest';
// import request from "supertest";
// import { app } from "../index"
// vi.mock('../db',() => ({  //this is mocking the db
//   prismaClient: {
//     request: {
//       create: vi.fn(),//note to mock the ryt function defined/used in index.ts (inside prismaClient.request.create)-- here create is function
//       findMany: vi.fn()
//     }
//     //if anaother table for example user
//     // ,user: {
//     //  create: vi.fn(),
//     //  findMany: vi.fn()
//     //}
//   }
// }))
// describe("POST /sum", () => {
//   it("should return the sum of two numbers", async () => {
//       const res = await request(app).post("/sum").send({
//         a: 1,
//         b: 2
//       });
//       expect(res.statusCode).toBe(200);
//       expect(res.body.answer).toBe(3);
//     });
//     it("should return 411 if no inputs are provided", async () => {
//       const res = await request(app).post("/sum").send({});
//       expect(res.statusCode).toBe(411);
//       expect(res.body.message).toBe("Incorrect inputs");
//     });
// });
// describe("GET /sum", () => {
//   it("should return the sum of two numbers", async () => {
//       const res = await request(app)
//         .get("/sum")
//         .set({
//           a: "1",
//           b: "2"
//         })
//         .send();
//       expect(res.statusCode).toBe(200);
//       expect(res.body.answer).toBe(3);
//   });
//   it("should return 411 if no inputs are provided", async () => {
//     const res = await request(app)
//       .get("/sum").send();
//     expect(res.statusCode).toBe(411);
//   });
// });
//deep mocking 
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
vitest_1.vi.mock('../db', () => ({
    prismaClient: {
        request: {
            create: vitest_1.vi.fn(),
            findMany: vitest_1.vi.fn()
        }
    }
}));
(0, vitest_1.describe)("POST /sum", () => {
    (0, vitest_1.it)("should return the sum of two numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(3);
    }));
    (0, vitest_1.it)("should return 411 if no inputs are provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({});
        (0, vitest_1.expect)(res.statusCode).toBe(411);
        (0, vitest_1.expect)(res.body.message).toBe("Incorrect inputs");
    }));
});
(0, vitest_1.describe)("GET /sum", () => {
    (0, vitest_1.it)("should return the sum of two numbers", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app)
            .get("/sum")
            .set({
            a: "1",
            b: "2"
        })
            .send();
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(3);
    }));
    (0, vitest_1.it)("should return 411 if no inputs are provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app)
            .get("/sum").send();
        (0, vitest_1.expect)(res.statusCode).toBe(411);
    }));
});
