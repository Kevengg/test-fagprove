export default class ApiError extends Error {
    public status: number;

    constructor(message: string, status: number = 400) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}
