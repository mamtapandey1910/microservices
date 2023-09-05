import { Request, Response, NextFunction } from "express"

export type AllAPI = (req: Request, res: Response, next: NextFunction) => Promise<void> | void
