class NotFound extends Error {
    public status: number;

    constructor(message: string) {
        super(message);

        // assign the error class name in your custom error (as a shortcut)
        this.name = this.constructor.name;

        // capturing the stack trace keeps the reference to your error class
        Error.captureStackTrace(this, this.constructor);

        this.status = 404;
    }

    statusCode() {
        return this.status;
    }
}

export default NotFound;
