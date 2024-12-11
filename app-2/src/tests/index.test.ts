//type 1
    // import {describe, expect, test, it} from '@jest/globals';
    // import request from "supertest";
    // import { app } from "../index"

    // describe("POST /sum", () => {
    //     it("should return the sum of two numbers", async () => {
    //         const res = await request(app).post("/sum").send({
    //         a: 1,
    //         b: 2
    //         });
    //         expect(res.statusCode).toBe(200);
    //         expect(res.body.answer).toBe(3);
    //     });

    //     it("should return the sum of two negative numbers", async () => {
    //         const res = await request(app).post("/sum").send({
    //         a: -1,
    //         b: -2
    //         });
    //         expect(res.statusCode).toBe(200);
    //         expect(res.body.answer).toBe(-3);
    //     });

    //     it("should return the sum of two zero number", async () => {
    //         const res = await request(app).post("/sum").send({
    //         a: 0,
    //         b: 0
    //         });
    //         expect(res.statusCode).toBe(200);
    //         expect(res.body.answer).toBe(0);
    //     });
    // });

//type 2 

// import {describe, expect, test, it} from '@jest/globals';
// import request from "supertest";
// import { app } from "../index";

// describe("POST /sum", () => {
//     it("should return the sum of two numbers", async () => {
//         const res = await request(app).post("/sum").send({
//           a: 1,
//           b: 2
//         });
//     //or-> axios.post('http://localhost:3000/sum', {a: 1, b: 2})  -> works only when the servewre is also running

//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(3);
//       });

//       it("should return the sum of two negative numbers", async () => {
//         const res = await request(app).post("/sum").send({
//           a: -1,
//           b: -2
//         });
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(-3);
//       });

//       it("should return the sum of two zero number", async () => {
//         const res = await request(app).post("/sum").send({
//           a: 0,
//           b: 0
//         });
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(0);
//       });
// });


//type 3 (jest to vitest)
    //npm i -D vitest
    // import {describe, expect, test, it} from 'vitest';
    // import request from "supertest";
    // import { app } from "../index"

    // describe("POST /sum", () => {
    // it("should return the sum of two numbers", async () => {
    //     const res = await request(app).post("/sum").send({
    //         a: 1,
    //         b: 2
    //     });
    //     expect(res.statusCode).toBe(200);
    //     expect(res.body.answer).toBe(3);
    //     });

    //     it("should return 411 if no inputs are provided", async () => {
    //     const res = await request(app).post("/sum").send({});
    //     expect(res.statusCode).toBe(411);
    //     expect(res.body.message).toBe("Incorrect inputs");
    //     });

    // });


    // describe("GET /sum", () => {
    // it("should return the sum of two numbers", async () => {
    //     const res = await request(app)
    //         .get("/sum")
    //         .set({
    //         a: "1",
    //         b: "2"
    //         })
    //         .send();
    //     expect(res.statusCode).toBe(200);
    //     expect(res.body.answer).toBe(3);
    // });

    // it("should return 411 if no inputs are provided", async () => {
    //     const res = await request(app)
    //     .get("/sum").send();
    //     expect(res.statusCode).toBe(411);
    // });

    // });
