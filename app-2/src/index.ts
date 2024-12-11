
//type 1
    import express from "express";

    export const app = express();
    // app.use(express.json());

    // app.post("/sum", (req, res) => {
    //     const a = req.body.a;
    //     const b = req.body.b;
    //     const answer = a + b;

    //     res.json({
    //         answer
    //     })
    // }); 


//type 2 

    // import express from "express";
    // import { z } from "zod";

    // export const app = express();
    // app.use(express.json());

    // const sumInput = z.object({
    //     a: z.number(),
    //     b: z.number()
    // })

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

    // app.get("/sum", (req, res) => {
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

    //     res.json({
    //         answer
    //     })
    // });

//type 3 (jest to vitest)

    // import express from "express";
    // import { z } from "zod";

    // export const app = express();
    // app.use(express.json());

    // const sumInput = z.object({
    //     a: z.number(),
    //     b: z.number()
    // })

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

    // app.get("/sum", (req, res) => {
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

    //     res.json({
    //         answer
    //     })
    // });