import { ErrorHandlerType } from "./utilsType"

export class ErrorHandler extends Error implements ErrorHandlerType {
    status: number
    constructor(message: string, status: number) {
        super(message)
        this.status = status
    }
}