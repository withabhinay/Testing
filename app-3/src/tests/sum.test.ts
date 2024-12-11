import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import { app } from "../index"
import { prismaClient } from '../__mocks__/db'

vi.mock('../db');

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      prismaClient.request.create.mockResolvedValue({
          id: 1,
          a: 1,
          b: 1,
          result: 3,
          type: 'Sum' 
      });
      vi.spyOn(prismaClient.request, 'create'); //spy on the create function to see if it was called with the correct arguments (for ex if a has b's data and b has a's data)

      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });

      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    expect(prismaClient.request.create).toHaveBeenCalledWith({  //expect the create function to be called with the correct arguments/inputs 
        data: {
            a:1,
            b:2,
            type: 'Sum',
            answer: 3
        }
    });
    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
      prismaClient.request.create.mockResolvedValue({
          id: 1,
          a: 1,
          b: 1,
          result: 3,
          type: 'Sum'
      });

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
