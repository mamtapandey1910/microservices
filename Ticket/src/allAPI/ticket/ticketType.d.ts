import { Request, Response, NextFunction } from "express"

export type APIType = (req: Request, res: Response, next: NextFunction) => Promise<void> | void