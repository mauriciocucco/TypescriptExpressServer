class CustomError extends Error {
    public status: number | null = null;

    constructor(message: string) {
        super(message);

        // assign the error class name in your custom error (as a shortcut)
        this.name = this.constructor.name;

        // capturing the stack trace keeps the reference to your error class
        Error.captureStackTrace(this, this.constructor);
    }

    statusCode() {
        return this.status;
    }
}

export default CustomError;
