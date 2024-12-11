//type 1 without mocking 
// (npx prisma generate)
    // import { PrismaClient } from "@prisma/client"; //-> note: here there is no use of db.ts because we are importing it here itself  
    // import express from "express";
    // import { z } from "zod";

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
import { prismaClient } from "./db";
import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

//const prismaClient = new PrismaClient();
const sumInput = z.object({
    a: z.number(),
    b: z.number()
})
//@ts-ignore
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
//@ts-ignore
app.get("/sum", async(req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    prismaClient.request.create({                       //after mocking the db.ts file we can use prismaClient.request.create 
        data: {                                         //calls an empty function while mocking 
            a:parsedResponse.data.a,
            b:parsedResponse.data.b,
            result: answer,
            type: "Sum"
        }
    })
    res.json({
        answer
    })
});

//@ts-ignore
app.get("/multiply", async(req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    prismaClient.request.create({  //can be Request or request (as per the naming convention) from schema
        data: {                     //after mocking the db.ts file we can use prismaClient.request.create because it call vi.fn() to make a dummy, so it's of no use u can remove it as well.
            a:parsedResponse.data.a,
            b:parsedResponse.data.b,
            result: answer,
            type: "Multiply"
        }
    })
    res.json({
        answer
    })
});