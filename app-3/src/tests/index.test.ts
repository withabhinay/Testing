//basic try here
  //import { expect, test } from 'vitest'

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


//deep mocking  //use __mocks__ folder (u can use the above one for the First test from __mocks__)

  // import {describe, expect, test, it, vi} from 'vitest';
  // import request from "supertest";
  // import { app } from "../index"

  // vi.mock('../db',() => ({ 
  //   prismaClient: {
  //     request: {
  //       create: vi.fn(),
  //       findMany: vi.fn()
  //     }
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

// deepmocking  //useing __mocks__ folder to make it more structured
import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import { app } from "../index"
import { prismaClient } from "../db";

vi.mock('../db')

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app)
        .get("/sum")
        .set({
          a: "1",
          b: "2"
        })
        .send();
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/sum").send();
    expect(res.statusCode).toBe(411);
  });

});