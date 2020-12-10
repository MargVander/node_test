import { Request, Response } from "express-serve-static-core";

export class DefaultController {

    async hello(request: Request, response: Response) {
        return { message: 'Hello, World !' };
    }
    
}