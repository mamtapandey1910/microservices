import { Request, Response, NextFunction } from "express"
import { ErrorHandlerType } from "../../utils/utilsType"

export type ErrorMiddlewareType = (err: ErrorHandlerType, req: Request, res: Response, next: NextFunction) => void
