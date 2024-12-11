//file name should be same as the file which is being mocked

//mocking 
    // import { vi } from "vitest";
    // export const prismaClient = {
    //     request: {
    //         create: vi.fn(),
    //         //findMany: vi.fn()
    //     }
    //}

//deep mocking 
    import { PrismaClient } from '@prisma/client'
    import { beforeEach } from 'vitest'
    import { mockDeep, mockReset } from 'vitest-mock-extended'
    //if not mocked deep then prismClient => jest.fn and so console.log(prismaClient.create) will be => undefined
    export const prismaClient = mockDeep<PrismaClient>()  //create new prismaClient object with all the functions of PrismaClient (mocks verything inside ) for eg-
    // export const PrismaClient = {
    //     request: {
    //         create: vi.fn(),
    //         findMany: vi.fn(),
    //         //all other function 
    //     }
    // }
    //want to check all are mocked or not 
     console.log(prismaClient.request.create);
